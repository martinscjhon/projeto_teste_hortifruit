import { patternColors } from "@shared/colors";
import styled from "styled-components";

export const Header = styled.header`
  background-color: ${patternColors.orange};
  width: 100vw;
  height: 63px;
  padding: 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;

  img {
    border-radius: 100%;
    width: 40px;
  }

  .wrapper_badge {
    display: flex;
    align-items: center;
    gap: 15px;
    position: relative;

    .wrapper_badge_component {
      position: absolute;
      top: 0px;
      left: 10px;
    }
  }
`;
