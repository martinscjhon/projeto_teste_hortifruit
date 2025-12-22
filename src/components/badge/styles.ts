import { patternColors } from "@shared/colors";
import styled from "styled-components";

export const Wrapper = styled.div`
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
`;
