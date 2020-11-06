// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../../defaultTheme";
import getViewportHideStyles from "../../Hide/helpers/getViewportHideStyles";
import { StyledCard } from "../../Card";
import { StyledCard as DeprecatedStyledCard } from "../../deprecated/Card";
import { getBreakpointWidth } from "../../utils/mediaQuery";
import { QUERIES } from "../../utils/mediaQuery/consts";

import type { Props } from "./index";

const StyledColumn = styled.div`
  ${({ hideOn }) => !!hideOn && getViewportHideStyles(hideOn)};

  @media (max-width: ${({ theme }) =>
      +getBreakpointWidth(QUERIES.LARGEMOBILE, theme, true) - 1}px) {
    ${StyledCard}, ${DeprecatedStyledCard} {
      margin-right: -${({ theme }) => theme.orbit.spaceMedium};
      margin-left: -${({ theme }) => theme.orbit.spaceMedium};
      width: auto;
    }
  }
`;

StyledColumn.defaultProps = {
  theme: defaultTheme,
};

const LayoutColumn = ({ children, hideOn, asComponent = "div", dataTest }: Props) => {
  return (
    <StyledColumn data-test={dataTest} hideOn={hideOn} as={asComponent}>
      {children}
    </StyledColumn>
  );
};

export default LayoutColumn;
