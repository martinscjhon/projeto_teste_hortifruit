import { patternColors } from "@shared/colors";
import styled from "styled-components";

export const WrapperOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 9;

  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease;

  &.active {
    opacity: 1;
    pointer-events: auto;
  }
`;

export const WrraperContent = styled.section`
  width: 100%;
  height: 60%;
  background: ${patternColors.white};

  transform: translateY(100%);
  transition: transform 0.3s ease;

  .wrapper_header {
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${patternColors.grayLight};
    padding-bottom: 10px;
    box-shadow:
      rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
      rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  }

  .wrapper_image {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: ${patternColors.grayLight};
    box-shadow:
      rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
      rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

    padding: 1rem 0px;
    gap: 1rem;

    img {
      width: 80px;
      object-fit: contain;
      max-height: 80px;
      margin: 0 auto;
      mix-blend-mode: multiply;
    }
  }

  .wrapper_description {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 10px;

    .qty {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 30px;
      border-radius: 5px;
      padding: 0px 15px;
    }
  }

  .wrapper_root {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
  }

  .wrapper_actions {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    gap: 1rem;

    button {
      width: 100%;
    }
  }

  ${WrapperOverlay}.active & {
    transform: translateY(0);
  }

  ${WrapperOverlay}.inactive & {
    transform: translateY(100%);
  }
`;
