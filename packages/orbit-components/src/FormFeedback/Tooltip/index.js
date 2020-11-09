// @flow
import React, { useRef } from "react";
import styled from "styled-components";

import TooltipPrimitive from "../../primitives/TooltipPrimitive";
import defaultTheme from "../../defaultTheme";
import { rtlSpacing } from "../../utils/rtl";
import resolveTooltipPosition from "./helpers/resolveTooltipPosition";
import useDimensions from "../hooks/useDimensions";

import type { Props } from "./index";

const StyledFormFeedbackTooltip = styled.div`
  position: absolute;

  ${resolveTooltipPosition};
`;

StyledFormFeedbackTooltip.defaultProps = {
  theme: defaultTheme,
};

const StyledCloseButton = styled.a`
  color: ${({ theme }) => theme.orbit.paletteWhite};
  cursor: pointer;
  margin: ${({ theme }) => rtlSpacing(`0 0 0 ${theme.orbit.spaceSmall}`)};
  display: flex;
`;

StyledCloseButton.defaultProps = {
  theme: defaultTheme,
};

const FormFeedbackTooltip = ({
  boundingRef,
  iconBoundingRef,
  preferedPosition = "top",
  tooltipShown,
  children,
  error,
  help,
  inlineLabel,
}: Props) => {
  const contentRef = useRef(null);

  const dimensions = useDimensions(
    { boundingRef, contentRef, iconBoundingRef },
    children,
    inlineLabel,
  );

  return (
    <StyledFormFeedbackTooltip
      ref={contentRef}
      iconBounding={dimensions.iconBounding}
      position={preferedPosition}
      inlineLabel={inlineLabel}
      aria-live="polite"
    >
      <TooltipPrimitive
        tooltipShown={tooltipShown}
        preferredPosition={preferedPosition}
        content={children}
        error={error}
        help={help}
      />
    </StyledFormFeedbackTooltip>
  );
};

export default FormFeedbackTooltip;
