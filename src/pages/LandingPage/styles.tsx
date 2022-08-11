import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { FONTSIZES, FONTWEIGHTS } from '../../constants/fonts';

export const LandingPageWrapper = styled.div`
  /* padding: 20.5rem 4.3rem 5.5rem 4.6rem; */
  padding-top: 20rem;
  padding-left: 4.6rem;
  padding-right: 4.3rem;

  .cta-box {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__text {
      color: ${COLORS.white};
      font-size: ${FONTSIZES.xxlarge};
    }
  }
`;

export const LandingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 17rem;
`;

// export const LandingPageImg = styled.img`
//   /* width: 54.1rem;
//   height: 60.7rem; */
//   position: absolute;
//   top: -191px;
//   right: 22px;
// `;

export const LandingPageHeader = styled.h1`
  font-size: ${FONTSIZES.huge};
  font-weight: ${FONTWEIGHTS.bold};
  color: ${COLORS.white};
  margin-bottom: 2.9rem;
`;

export const LandingPageText = styled.p`
  color: ${COLORS.white};
  font-size: ${FONTSIZES.small};
`;
