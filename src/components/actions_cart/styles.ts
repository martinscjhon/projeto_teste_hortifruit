import { patternColors } from "@shared/colors";
import styled from "styled-components";

export const PrincipalContainer = styled.div`
  background-color: ${patternColors.black};
  position: fixed;
  bottom: 54px;
  height: 40px;
  width: 100%;
  left: 0;

  button {
    width: 100%;
    border-radius: 0;
  }
`;
