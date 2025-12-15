import bgLogin from "@assets/background_login.jpg";
import styled from "styled-components";

import { patternColors } from "../../shared/colors";

export const SectionInitial = styled.section`
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
    text-align: left;
    gap: 1rem;
    padding: 1rem;
    margin-bottom: 1rem;

    li {
      color: ${patternColors.danger};
      list-style: none;
      font-size: 12px;
    }

    h1 {
      margin-bottom: 1rem;
    }

    button {
      margin-top: 20px;
      margin-bottom: 30px;
    }

    a {
      text-align: center;
      color: ${patternColors.gray};
    }
  }

  img {
    width: auto;
  }

  p:nth-child(1) {
    text-align: center;
  }
`;
