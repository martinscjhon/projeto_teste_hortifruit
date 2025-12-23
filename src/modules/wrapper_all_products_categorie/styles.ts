import { patternColors } from "@shared/colors";
import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    border-bottom: 1px solid #f1e5e5;
    padding: 20px 0px;

    > p {
      font-style: italic;
    }
    
     .wrapper_header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      a {
        font-size: 11px;
        color: ${patternColors.orange};
        font-style: italic;
      }
    }

    .wrapper_map {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      align-items: center;
      gap: 1.5rem;

      height: 100%;
      padding: 10px 1px;
    }

   
    .wrapper_container {
      background-color: ${patternColors.grayLight};
      min-width: 110px;
      max-width: 320px;
      display: grid;
      grid-template-columns: repeat(2, 70% 30%);
      align-items: center;
      height: 100%;
      box-shadow:
        rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
        rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
      border-radius: 5px;
      cursor: pointer;
      position: relative;
      padding: 10px;

      .description {
        font-style: oblique;
      }

      img {
        width: 50px;
        object-fit: contain;
        max-height: 40px;
        margin: 0 auto;
        mix-blend-mode: multiply;
      }

      .wrapper_badge_component {
        position: absolute;
        top: 5px;
        right: 5px;
      }

      .wrapper_description_product {
        display: flex;
        flex-direction: column;
        gap: 5px;
      }
    }

    .wrapper_container.active {
      background-color: ${patternColors.orangeLight};
      border: 1px solid ${patternColors.orange};
    }
`;
