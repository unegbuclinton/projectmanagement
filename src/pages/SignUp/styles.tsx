import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { FONTSIZES } from '../../constants/fonts';

export const SignUpWrapper = styled.div`
  padding: 5rem 2.5rem 5rem 2.4rem;
`;

export const SignUpHeader = styled.h1`
  font-size: ${FONTSIZES.huge};
  color: ${COLORS.white};
  font-weight: 600;
  margin-bottom: 5rem;
`;

export const SignUpForm = styled.form``;

export const InputWrapper = styled.div`
  margin-bottom: 2.4rem;
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
