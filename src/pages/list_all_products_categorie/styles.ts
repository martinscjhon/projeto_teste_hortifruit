import { patternColors } from "@shared/colors";
import { styled } from "styled-components";

export const PrincipalContainer = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    margin-bottom: 1rem;
  }

  > div:last-child {
    border: none;
  }
`;
