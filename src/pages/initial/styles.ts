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

  .wrapper_actions_buttons {
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
  }
`;
