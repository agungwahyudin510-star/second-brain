import { createElement, type ComponentType } from "react";
import { EnglishA1Bab01Visuals } from "./a1-bab-01";
import { EnglishA1Bab02Visuals } from "./a1-bab-02";

export const ENGLISH_VISUALS: Record<string, React.ComponentType> = {
  ...EnglishA1Bab01Visuals,
  ...EnglishA1Bab02Visuals,
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
