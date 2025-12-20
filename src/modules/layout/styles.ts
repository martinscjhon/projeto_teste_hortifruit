import styled from "styled-components";

export const PublicMain = styled.main`
  width: 100vw;
  height: 100vh;
`;

export const PrivateMain = styled.main`
  height: 100vh;
  display: grid;
  grid-template-rows: 63px 1fr 25px;
  gap: 5px;
  overflow: hidden;
`;

export const ContentWrapper = styled.section`
  overflow-y: auto;
  padding: 16px;
`;
