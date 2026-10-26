import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import ts from "typescript";

const root = process.cwd();
const read = (relative) => fs.readFileSync(path.join(root, relative), "utf8");
const parse = (relative) => ts.createSourceFile(relative, read(relative), ts.ScriptTarget.Latest, true);
const property = (node, name) => node.properties?.find((item) =>
  (ts.isPropertyAssignment(item) || ts.isMethodDeclaration(item))
  && (ts.isIdentifier(item.name) || ts.isStringLiteral(item.name))
  && item.name.text === name);
const stringValue = (node) => ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node) ? node.text : "";
const numericValue = (node) => ts.isNumericLiteral(node) ? Number(node.text) : NaN;

const chapterFile = "src/data/curriculum/ekonomi/bab-03.ts";
const chapterSource = parse(chapterFile);
const lessons = [];
function visitLessons(node) {
  if (ts.isObjectLiteralExpression(node)) {
    const id = property(node, "id");
    const content = property(node, "content");
    const lessonId = id ? stringValue(id.initializer) : "";
    if (lessonId.startsWith("eko2-b03-s") && content && ts.isNoSubstitutionTemplateLiteral(content.initializer)) {
      lessons.push({ id: lessonId, content: content.initializer.text });
    }
  }
  ts.forEachChild(node, visitLessons);
}
visitLessons(chapterSource);
assert.equal(lessons.length, 5, "Bab 3 harus memiliki lima sub-bagian.");
const wordCounts = lessons.map(({ id, content }) => {
  const count = content.trim().split(/\s+/).length;
  assert.ok(count >= 600 && count <= 900, `${id} memiliki ${count} kata; target 600–900.`);
  return { id, count };
});

const utilityFile = "src/components/visuals/ekonomi/econ-math.ts";
const utilitySource = read(utilityFile);
const compiled = ts.transpileModule(utilitySource, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText;
const utilityModule = { exports: {} };
new Function("exports", "require", "module", compiled)(utilityModule.exports, () => {
  throw new Error("econ-math must remain dependency-free for this verifier.");
}, utilityModule);
const math = utilityModule.exports;
const midpoint = math.midpointElasticity(10, 12, 100, 80);
assert.ok(Math.abs(midpoint.quantityPercent - (-22.2222222222)) < 0.001);
assert.ok(Math.abs(midpoint.pricePercent - 18.1818181818) < 0.001);
assert.ok(Math.abs(midpoint.elasticity - 1.2222222222) < 0.001);
assert.deepEqual(math.equilibriumSurplus(), { consumer: 160, producer: 160, total: 320 });
const ceiling = math.controlledPrice("ceiling", 8);
assert.equal(ceiling.quantityDemanded, 60);
assert.equal(ceiling.quantitySupplied, 20);
assert.equal(ceiling.shortage, 40);
assert.equal(ceiling.consumer, 200);
assert.equal(ceiling.producer, 40);
assert.equal(ceiling.deadweightLoss, 80);
const floor = math.controlledPrice("floor", 16);
assert.equal(floor.quantityDemanded, 20);
assert.equal(floor.quantitySupplied, 60);
assert.equal(floor.excessSupply, 40);
assert.equal(floor.consumer, 40);
assert.equal(floor.producer, 200);
assert.equal(floor.deadweightLoss, 80);
const tax = math.taxOutcome(4);
assert.deepEqual(
  Object.fromEntries(["buyerPrice", "sellerPrice", "quantity", "buyerBurden", "sellerBurden", "revenue", "deadweightLoss"].map((key) => [key, Math.round(tax[key] * 100) / 100])),
  { buyerPrice: 14, sellerPrice: 10, quantity: 30, buyerBurden: 2, sellerBurden: 2, revenue: 120, deadweightLoss: 20 }
);
const inelastic = math.midpointElasticity(10, 12, 100, 95);
assert.ok(Math.abs(inelastic.elasticity - 0.282) < 0.01);
assert.equal(10 * 100, 1000);
assert.equal(12 * 95, 1140);
const types = [
  { value: 30 / 20, expected: 1.5 },
  { value: -10 / 20, expected: -0.5 },
  { value: 6 / 10, expected: 0.6 },
  { value: -8 / 10, expected: -0.8 },
];
types.forEach(({ value, expected }) => assert.ok(Math.abs(value - expected) < 1e-10));

const allChapterText = lessons.map((lesson) => lesson.content).join("\n");
const compactChapterText = allChapterText.replace(/\s+/g, "");
for (const expected of ["1,22", "960", "1.000", "0,28", "1.140", "1,5", "−0,5", "0,6", "−0,8", "SK=160", "SP=160", "TS=320", "DWL=80", "P_b=14", "P_s=10", "120", "½×t×(Q*−Q)=½×4×(40−30)"]) {
  assert.ok(compactChapterText.includes(expected), `Materi Bab 3 harus mencantumkan hasil hitung ${expected}.`);
}
const assessmentSource = parse("src/data/curriculum/economics-assessments.ts");
const assessmentText = assessmentSource.getText().replace(/\r\n/g, "\n");
assert.ok(assessmentText.includes("index === answer\n      ? null"));
assert.ok(assessmentText.includes("${String.fromCharCode(65 + index)}. ${distractorReasons[distractorIndex++]}"));
const markerIds = [...allChapterText.matchAll(/\[\[visual:([a-z0-9-]+)\]\]/g)].map((match) => match[1]);
const registrySource = read("src/components/visuals/ekonomi/index.ts");
const unregistered = markerIds.filter((id) => !registrySource.includes(`"${id}"`));
assert.equal(unregistered.length, 0, `Marker tanpa registry: ${unregistered.join(", ")}`);
assert.equal(new Set(markerIds).size, 5, "Bab 3 harus memakai lima visual berbeda.");

let quizArray;
function findQuiz(node) {
  if (ts.isVariableDeclaration(node) && ts.isIdentifier(node.name) && node.name.text === "ECONOMICS_QUIZZES") {
    const chapter = property(node.initializer, "eko2-b03");
    quizArray = chapter?.initializer;
  }
  ts.forEachChild(node, findQuiz);
}
findQuiz(assessmentSource);
assert.ok(quizArray && ts.isArrayLiteralExpression(quizArray));
const questions = quizArray.elements;
assert.equal(questions.length, 10);
const categoryCounts = { "Konsep": 0, "Hitungan": 0, "Kasus": 0 };
const distractorAudit = [];
const correctAnswerChecks = {
  "eko2-b03-q05": ["1,22", "960"],
  "eko2-b03-q06": ["SK=200", "SP=40", "DWL=80"],
  "eko2-b03-q07": ["P_b=14", "P_s=10", "120", "20"],
};
for (const question of questions) {
  assert.ok(ts.isCallExpression(question) && question.arguments.length === 7);
  const [idNode, conceptNode, , optionsNode, answerNode, , reasonsNode] = question.arguments;
  const id = stringValue(idNode);
  const concept = stringValue(conceptNode);
  const category = concept.split(" • ")[0];
  categoryCounts[category] += 1;
  assert.ok(ts.isArrayLiteralExpression(optionsNode));
  assert.ok(ts.isArrayLiteralExpression(reasonsNode));
  const options = optionsNode.elements.map(stringValue);
  const reasons = reasonsNode.elements.map(stringValue);
  const answer = numericValue(answerNode);
  assert.equal(options.length, 4, `${id} harus memiliki empat opsi.`);
  assert.ok(answer >= 0 && answer < options.length, `${id} memiliki indeks jawaban tidak valid.`);
  assert.equal(reasons.length, 3, `${id} harus memiliki tiga alasan pengecoh.`);
  for (const token of correctAnswerChecks[id] ?? []) {
    assert.ok(options[answer].replace(/\s+/g, "").includes(token), `${id}: kunci jawaban tidak mencantumkan hasil ${token}.`);
  }
  const mapped = [];
  let reasonIndex = 0;
  options.forEach((_, index) => {
    if (index === answer) return;
    const reason = reasons[reasonIndex++];
    assert.ok(reason.length > 0, `${id}: alasan pengecoh untuk opsi ${String.fromCharCode(65 + index)} kosong.`);
    mapped.push(`${String.fromCharCode(65 + index)}→${reason}`);
  });
  distractorAudit.push({ id, correct: String.fromCharCode(65 + answer), wrong: mapped.join("/") });
}
assert.deepEqual(categoryCounts, { "Konsep": 4, "Hitungan": 3, "Kasus": 3 });
assert.equal(new Set(distractorAudit.map((item) => item.correct)).size, 4, "Kunci jawaban harus tersebar pada posisi A–D.");
assert.match(assessmentText, /"eko2-b03":\s*\[\s*\{ id: "eko2-b03-e01"/);
assert.match(assessmentText, /"eko2-b03":\s*\[[\s\S]*eko2-b03-e02/);

console.log("Word counts:", wordCounts.map(({ id, count }) => `${id}=${count}`).join(", "));
console.log("Reference calculations: midpoint 1.22/TR 1,000→960; inelastic 0.28/TR 1,000→1,140; income 1.5/−0.5; cross +0.6/−0.8; equilibrium SK=160/SP=160/TS=320; ceiling SK=200/SP=40/DWL=80; floor SK=40/SP=200/DWL=80; tax Pb=14/Ps=10/revenue=120/DWL=20.");
console.log("Visual markers registered:", markerIds.join(", "));
console.log("Distractor mappings:", distractorAudit.map(({ id, correct, wrong }) => `${id} correct=${correct}; ${wrong}`).join("; "));
console.log("All Bab 3 verification checks passed.");
