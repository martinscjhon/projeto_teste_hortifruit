import { patternColors } from "@shared/colors";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  border-bottom: 1px solid #f1e5e5;
  padding: 20px 0px;

  > p {
    font-style: italic;
  }

  .wrapper_map {
    display: flex;
    align-items: center;
    overflow-x: auto;
    gap: 1.5rem;

    height: 11rem;
    padding: 10px 1px;
  }

  .wrapper_container {
    background-color: ${patternColors.grayLight};
    min-width: 130px;
    max-width: 350px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    height: 100%;
    box-shadow:
      rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
      rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    border-radius: 5px;
    cursor: pointer;

    .description {
      font-style: italic;
    }

    img {
      width: 63px;
      object-fit: contain;
      max-height: 63px;
      margin: 0 auto;
      mix-blend-mode: multiply;
    }
  }
`;
