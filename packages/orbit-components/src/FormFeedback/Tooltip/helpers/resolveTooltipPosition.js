// @flow
import { css } from "styled-components";

import type { ResolveTooltipPosition } from "./resolveTooltipPosition.js.flow";
import { left } from "../../../utils/rtl";

const resolveTooltipPosition: ResolveTooltipPosition = ({
  position,
  iconBounding,
  inlineLabel,
}) => {
  const pos = {
    top: css`
      top: -16px;
      ${left}: ${/* eslint-disable-next-line no-nested-ternary */
      iconBounding ? (inlineLabel ? iconBounding.width : iconBounding.width / 2) : 8}px;
    `,
  };
  return pos[position];
};

export default resolveTooltipPosition;
