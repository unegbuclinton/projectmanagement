import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../../../constants/colors';
import { FONTSIZES, FONTWEIGHTS } from '../../../constants/fonts';

export const CreateprojectWrapper = styled.div`
  max-height: 47rem;
  margin: 0rem 2.3rem;
  width: 31rem;
  background-color: ${COLORS.white};
  padding: 1rem 1.5rem;
  border-radius: 1.2rem;
  overflow: auto;

  .btn-wrapper {
    display: flex;
    justify-content: center;
    .create-project__btn {
      padding: 1.2rem 6rem;
      background-color: ${COLORS['smoky-black']};
      color: ${COLORS.white};
      border-radius: 1rem;
      font-weight: ${FONTWEIGHTS.bold};
    }
  }
`;

export const ProjectHeader = styled.h1`
  display: flex;
  justify-content: center;
  font-size: ${FONTSIZES.xxxlarge};
  color: ${COLORS.black};
  font-weight: 600;
  margin-bottom: 3rem;
  margin-top: 1rem;
`;

export const CreateprojectForm = styled.form``;

export const InputWrapperr = styled.div`
  margin-bottom: 2.4rem;
  .input-style {
    background-color: transparent;
    border-bottom: 1px solid ${COLORS.black};
    padding-left: 0.8rem;
    color: ${COLORS.black};
  }
  .details-container {
    display: flex;
    align-items: center;
    gap: 0.7rem;

    p {
      font-size: ${FONTSIZES.small};
    }

    .assign-box {
      display: flex;
      gap: 0.3rem;

      &__item {
        width: 2.6rem;
        height: 2.6rem;
        border-radius: 50%;
        background-color: ${COLORS.black};
      }
    }
  }
`;

export const ProjectDetailHeader = styled.div`
  margin-bottom: 1.5rem;
  font-weight: ${FONTWEIGHTS.medium};
  font-size: 1.6rem;
  line-height: 1.9rem;
`;
export const InputLabel = styled.h1`
  font-weight: ${FONTWEIGHTS.medium};
  font-size: 1.6rem;
  line-height: 1.9rem;
  color: ${COLORS.black};
`;

export const Navigatelink = styled(Link)`
  font-size: ${FONTSIZES.base};
  padding-left: 0.3rem;
  color: ${COLORS.black};
  text-decoration: none;
`;

export const CreateProjectWrapper = styled.div`
  padding: 5rem 2.5rem 5rem 2.4rem;
`;

export const CreateProjectHeader = styled.h1`
  font-size: ${FONTSIZES.huge};
  color: ${COLORS.white};
  font-weight: 600;
  margin-bottom: 5rem;
`;

export const InputWrapper = styled.div`
  margin-bottom: 2.4rem;
  .CreateProject-input {
    background-color: transparent;
    border-bottom: 1px solid ${COLORS.white};
    padding-left: 0.8rem;
    margin-bottom: 1.6rem;
  }
`;
