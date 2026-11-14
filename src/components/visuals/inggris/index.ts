import { createElement, type ComponentType } from "react";
import { EnglishA1Bab01Visuals } from "./a1-bab-01";
import { EnglishA1Bab02Visuals } from "./a1-bab-02";
import { EnglishA1Bab03Visuals } from "./a1-bab-03";
import { EnglishA1Bab04Visuals } from "./a1-bab-04";
import { EnglishA1Bab05Visuals } from "./a1-bab-05";
import { EnglishA1Bab06Visuals } from "./a1-bab-06";
import { EnglishA1Bab07Visuals } from "./a1-bab-07";
import { EnglishA1Bab08Visuals } from "./a1-bab-08";
import { EnglishA2Bab01Visuals } from "./a2-bab-01";
import { EnglishA2Bab02Visuals } from "./a2-bab-02";
import { EnglishA2Bab03Visuals } from "./a2-bab-03";
import { EnglishA2Bab04Visuals } from "./a2-bab-04";
import { EnglishA2Bab05Visuals } from "./a2-bab-05";
import { EnglishA2Bab06Visuals } from "./a2-bab-06";
import { EnglishA2Bab07Visuals } from "./a2-bab-07";
import { EnglishA2Bab08Visuals } from "./a2-bab-08";

export const ENGLISH_VISUALS: Record<string, React.ComponentType> = {
  ...EnglishA1Bab01Visuals,
  ...EnglishA1Bab02Visuals,
  ...EnglishA1Bab03Visuals,
  ...EnglishA1Bab04Visuals,
  ...EnglishA1Bab05Visuals,
  ...EnglishA1Bab06Visuals,
  ...EnglishA1Bab07Visuals,
  ...EnglishA1Bab08Visuals,
  ...EnglishA2Bab01Visuals,
  ...EnglishA2Bab02Visuals,
  ...EnglishA2Bab03Visuals,
  ...EnglishA2Bab04Visuals,
  ...EnglishA2Bab05Visuals,
  ...EnglishA2Bab06Visuals,
  ...EnglishA2Bab07Visuals,
  ...EnglishA2Bab08Visuals,
};

export function makeVisual<Props extends object>(
  Component: ComponentType<Props>,
  props: Props,
): ComponentType {
  function ConfiguredVisual() {
    return createElement(Component, props);
  }

  return ConfiguredVisual;
}
