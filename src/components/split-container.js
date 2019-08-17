import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

export const SplitContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  @media (min-width: ${props => `${props.breakWidth || "800px"}`}) {
    flex-direction: row;
  }
`;

export const Container = styled.div`
  flex: 1 1;
  display: grid;
  align-content: center;
`;
