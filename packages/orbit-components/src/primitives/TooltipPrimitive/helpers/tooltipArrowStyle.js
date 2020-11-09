// @flow
import { css } from "styled-components";

import type { Props } from "./tooltipArrowStyle";

const resolveColor = ({ error, help, theme }) => {
  if (error) return theme.orbit.paletteRedNormal;
  if (help) return theme.orbit.paletteBlueNormal;
  return theme.orbit.paletteInkNormal;
};

const tooltipArrowStyle = ({ position }: Props) => {
  const arrows = {
    top: css`
      border-width: 7px 7px 0 7px; // TODO: create token sizeTooltipArrow
      border-color: ${resolveColor} transparent transparent transparent; // TODO: create token backgroundTooltip
    `,
    right: css`
      border-width: 7px 7px 7px 0; // TODO: create token sizeTooltipArrow
      border-color: transparent ${resolveColor} transparent transparent; // TODO: create token backgroundTooltip
    `,
    left: css`
      border-width: 7px 0 7px 7px; // TODO: create token sizeTooltipArrow
      border-color: transparent transparent transparent ${resolveColor}; // TODO: create token backgroundTooltip
    `,
    bottom: css`
      border-width: 0 7px 7px 7px; // TODO: create token sizeTooltipArrow
      border-color: transparent transparent ${resolveColor} transparent; // TODO: create token backgroundTooltip
    `,
  };
  return arrows[position];
};

export default tooltipArrowStyle;
