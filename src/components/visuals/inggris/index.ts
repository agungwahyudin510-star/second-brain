import { createElement, type ComponentType } from "react";
import { EnglishA1Bab01Visuals } from "./a1-bab-01";
import { EnglishA1Bab02Visuals } from "./a1-bab-02";
import { EnglishA1Bab03Visuals } from "./a1-bab-03";
import { EnglishA1Bab04Visuals } from "./a1-bab-04";
import { EnglishA1Bab05Visuals } from "./a1-bab-05";
import { EnglishA1Bab06Visuals } from "./a1-bab-06";

export const ENGLISH_VISUALS: Record<string, React.ComponentType> = {
  ...EnglishA1Bab01Visuals,
  ...EnglishA1Bab02Visuals,
  ...EnglishA1Bab03Visuals,
  ...EnglishA1Bab04Visuals,
  ...EnglishA1Bab05Visuals,
  ...EnglishA1Bab06Visuals,
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
