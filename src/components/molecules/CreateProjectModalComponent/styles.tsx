import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../../../constants/colors';
import { FONTSIZES, FONTWEIGHTS } from '../../../constants/fonts';

export const CreateprojectWrapper = styled.div`
  padding: 5rem 2.5rem 5rem 2.4rem;
`;

export const CreateprojectHeader = styled.h1`
  font-size: ${FONTSIZES.huge};
  color: ${COLORS.white};
  font-weight: 600;
  margin-bottom: 5rem;
`;

export const CreateprojectForm = styled.form``;

export const InputWrapperr = styled.div`
  margin-bottom: 2.4rem;
  .CreateProject-input {
    background-color: transparent;
    border-bottom: 1px solid ${COLORS.white};
    padding-left: 0.8rem;
    margin-bottom: 1.6rem;
  }
`;

export const InputLabel = styled.h1`
  font-weight: ${FONTWEIGHTS.Hmedium};
  font-size: 1.6rem;
  line-height: 1.9rem;
  color: #ffffff;
  margin-bottom: 2.2rem;
`;

export const ProjectTypeWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  .design-button {
    width: 92px;
    height: 30px;
    background: #fffae3;
    border-radius: 15px;
  }
  .integration-button {
    width: 120px;
    height: 30px;
    background: #aaadc4;
    border-radius: 15px;
  }
  .dashboard-button {
    width: 120px;
    height: 30px;
    background: #f39a9d;
    border-radius: 15px;
  }
  .lanndigpage-button {
    width: 120px;
    height: 30px;
    background: #e1ca96;
    border-radius: 15px;
  }
  .illustration-button {
    width: 120px;
    height: 30px;
    background: #e1ca96;
    border-radius: 15px;
  }
`;

export const Navigatelink = styled(Link)`
  font-size: ${FONTSIZES.base};
  padding-left: 0.3rem;
  color: ${COLORS.white};
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

export const CreateProjectForm = styled.form``;

export const InputWrapper = styled.div`
  margin-bottom: 2.4rem;
  .CreateProject-input {
    background-color: transparent;
    border-bottom: 1px solid ${COLORS.white};
    padding-left: 0.8rem;
    margin-bottom: 1.6rem;
  }
`;

export const OctaBoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3.5rem;
  margin-top: 4.4rem;
`;

export const OctaText = styled.p`
  color: ${COLORS.white};
  font-size: ${FONTSIZES.xxxlarge};
`;

export const SubmitButton = styled.button`
  background: transparent;
  border: none;
`;

export const AddedInfo = styled.p`
  display: flex;
  justify-content: center;
  color: rgba(255, 255, 255, 0.48);
  font-size: ${FONTSIZES.base};
  margin-bottom: 1.6rem;
`;

export const NavigateLink = styled(Link)`
  font-size: ${FONTSIZES.base};
  padding-left: 0.3rem;
  color: ${COLORS.white};
  text-decoration: none;
`;
