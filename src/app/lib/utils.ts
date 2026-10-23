export const cn = (...c: (string | false | null | undefined)[]) =>
  c.filter(Boolean).join(" ");

export const uid = () =>
  Math.random().toString(36).slice(2, 10) + Date.now().toString(36);

export const todayStr = () => new Date().toLocaleDateString("en-CA");

export const addDays = (days: number) => {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toLocaleDateString("en-CA");
};

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });