import { createElement, type ComponentType } from "react";
import { EnglishA1Bab01Visuals } from "./a1-bab-01";

export const ENGLISH_VISUALS: Record<string, React.ComponentType> = {
  ...EnglishA1Bab01Visuals,
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
