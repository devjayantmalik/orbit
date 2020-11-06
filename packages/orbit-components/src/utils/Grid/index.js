// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../../defaultTheme";
import mediaQueries from "../mediaQuery";
import { DEVICES } from "../mediaQuery/consts";
import getViewportGridStyles from "./helpers/getViewportGridStyles";
import isDefined from "../../Stack/helpers/isDefined";

import type { Props } from ".";

const StyledGrid = styled(({ className, asComponent: Component, children, dataTest }) => (
  <Component className={className} data-test={dataTest}>
    {children}
  </Component>
))`
  /*
    Just apply all mediaQueries (from devices map)
    smallMobile - default values are not mediaQuery and needs to be rendered differently
   */
  ${props =>
    DEVICES.map((viewport, index, devices) =>
      viewport in mediaQueries
        ? mediaQueries[viewport](css`
            ${isDefined(props[viewport]) && getViewportGridStyles({ viewport, index, devices })};
          `)
        : viewport === "smallMobile" &&
          css`
            ${getViewportGridStyles({ viewport, index, devices })};
          `,
    )};
  // for IE it needs to be explicitly set for children columns/rows
  & > * {
    display: block;
  }
`;

StyledGrid.defaultProps = {
  theme: defaultTheme,
};

const Grid = ({
  inline,
  rows = "1fr",
  columns = "1fr",
  gap,
  rowGap,
  columnGap,
  maxWidth,
  width,
  children,
  dataTest,
  asComponent = "div",
  ...props
}: Props) => {
  const smallMobile = { inline, rows, columns, gap, rowGap, columnGap, maxWidth, width };
  return (
    <StyledGrid {...props} smallMobile={smallMobile} data-test={dataTest} asComponent={asComponent}>
      {children}
    </StyledGrid>
  );
};

export default Grid;
