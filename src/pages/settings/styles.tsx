import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { FONTSIZES, FONTWEIGHTS } from '../../constants/fonts';

export const SettingWrapper = styled.div`
  margin-top: 4rem;
`;

export const SettingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-left: 2.9rem;
  margin-right: 2.4rem;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(66, 56, 56, 0.49);
`;

export const SettingText = styled.p`
  font-size: ${FONTSIZES.lg};
  font-weight: ${FONTWEIGHTS.bold};
  color: ${COLORS.white};
`;
