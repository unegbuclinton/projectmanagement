import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { FONTSIZES } from '../../constants/fonts';

export const LoginWrapper = styled.div`
  padding: 6.8rem 2.5rem 5rem 2.4rem;
`;

export const LoginHeader = styled.h1`
  font-size: ${FONTSIZES.huge};
  color: ${COLORS.white};
  font-weight: 600;
  margin-bottom: 11rem;
`;

export const LoginForm = styled.form`
  .input-wrapper {
    margin-bottom: 7rem;
    .login-input {
      background-color: transparent;
      border-bottom: 1px solid ${COLORS.white};
      padding-left: 0.8rem;
      margin-bottom: 1.6rem;
    }
  }

  .cta-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3.5rem;
    margin-top: 6.4rem;

    &__text {
      color: ${COLORS.white};
      font-size: ${FONTSIZES.xxxlarge};
    }

    button {
      background: transparent;
      border: none;
    }
  }

  .added-info {
    display: flex;
    justify-content: center;
    color: rgba(255, 255, 255, 0.48);
    font-size: ${FONTSIZES.base};
    margin-bottom: 1.6rem;
  }
  span {
    font-size: ${FONTSIZES.base};
    display: flex;
    justify-content: center;
    color: ${COLORS.white};
  }
`;
