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

    .products {
      background-color: ${patternColors.danger};
      position: absolute;
      border-radius: 100%;
      width: 15px;
      height: 15px;
      text-align: center;
      padding: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 10px;
      color: ${patternColors.white};
      top: 0px;
      left: 10px;
    }
  }
`;
