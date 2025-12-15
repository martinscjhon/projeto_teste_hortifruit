import styled from "styled-components";
import bgLogin from "@assets/background_login.jpg";
import { patternColors } from "../../shared/colors";

export const SectionLogin = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .background {
    height: 12rem;
    background-image: url(${bgLogin});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    margin-bottom: 1rem;

    h1 {
      margin-bottom: 1rem;
    }

    button {
      margin-top: 20px;
    }

    a {
      text-align: center;
      color: ${patternColors.orangeDark};
    }
  }

  img {
    width: auto;
  }

  p {
    text-align: center;
  }
`;
