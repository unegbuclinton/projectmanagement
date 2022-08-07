import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../constants/colors';
import { FONTSIZES } from '../../../constants/fonts';

interface Props {
  text: string;
}
const ErrorMessage: React.FC<Props> = ({ text }) => {
  return <TextMessage>{text}</TextMessage>;
};

export default ErrorMessage;

const TextMessage = styled.p`
  color: ${COLORS.white};
  font-size: ${FONTSIZES.small};
`;