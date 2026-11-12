import { createElement, type ComponentType } from "react";

export const ENGLISH_VISUALS: Record<string, React.ComponentType> = {};

export function makeVisual<Props extends object>(
  Component: ComponentType<Props>,
  props: Props,
): ComponentType {
  function ConfiguredVisual() {
    return createElement(Component, props);
  }

  return ConfiguredVisual;
}
