import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { FONTSIZES, FONTWEIGHTS } from '../../constants/fonts';

export const DashboardWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  height: 30.1rem;
`;

export const DashboardHeader = styled.h1`
  color: ${COLORS.white};
  font-size: ${FONTSIZES.xxlarge};
  font-weight: ${FONTWEIGHTS.bold};
  margin: 3.8rem 0 2.2rem 2rem;
`;
export const DashboarMoreButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  margin-right: 3.7rem;
  margin-bottom: 0.8rem;

  p {
    margin: 0;
    color: ${COLORS.white};
    font-size: ${FONTSIZES.small};
  }
  span {
    margin-top: 0.4rem;
  }
`;

export const CardsContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;

  .project-num {
    font-size: ${FONTSIZES.base};
    margin: 1rem 0rem 1rem 1.1rem;
    font-weight: 600;
  }
  .category {
    font-size: ${FONTSIZES.xsmall};
    margin-left: 1.1rem;
  }
  .icon {
    margin-left: 0.5rem;
    margin-top: 1rem;
  }
  .card-1 {
    background-color: #cfe0c3;
    width: 15.2rem;
    height: 13.5rem;
    border-radius: 0.7rem;

    .project-num {
      color: ${COLORS['grey-500']};
    }
    .category {
      color: ${COLORS['grey-500']};
    }
  }
  .card-2 {
    background-color: #5f5aa2;
    width: 15.2rem;
    height: 15.1rem;
    border-radius: 0.7rem;

    .project-num {
      color: ${COLORS.white};
    }
    .category {
      color: ${COLORS.white};
    }
  }

  .card-3 {
    background-color: #40798c;
    width: 14.7rem;
    height: 14.8rem;
    border-radius: 0.7rem;

    .project-num {
      color: ${COLORS.white};
    }
    .category {
      color: ${COLORS.white};
    }
  }
  .card-4 {
    background-color: #99e1d9;
    width: 14.7rem;
    height: 13.8rem;
    border-radius: 0.7rem;

    .project-num {
      color: ${COLORS.black};
    }
    .category {
      color: ${COLORS.black};
    }
  }
`;

export const ProjectHeader = styled.h1`
  color: ${COLORS.white};
  font-size: ${FONTSIZES.lg};
  font-weight: ${FONTWEIGHTS.bold};
  margin: 6.2rem 0 3.1rem 2.4rem;
`;
export const ProjectsContainer = styled.div``;

export const ProjectsItem = styled.div`
  margin: 2rem auto;
  width: 30.1rem;
  background-color: ${COLORS.white};
  padding: 1.6rem 1.9rem 1.1rem 1.7rem;
  border-radius: 0.8rem;

  .project-status {
    font-weight: ${FONTWEIGHTS.normal};
    font-size: ${FONTSIZES.small};
    margin-top: 0.8rem;
  }

  .project-assignee {
    margin-top: 1.1rem;

    &__item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      background-color: ${COLORS['smoky-black']};
      color: ${COLORS.white};
    }
  }
  .project-info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.1rem;

    &__header {
      font-size: ${FONTSIZES.base};
      font-weight: ${FONTWEIGHTS.bold};
    }

    &__time {
      display: flex;
      align-items: center;
      ${FONTSIZES.small};
      gap: 0.3rem;
    }
  }
`;

export const ProjectDescription = styled.div`
  font-size: ${FONTSIZES.base};
`;

export const ProjectImg = styled.img`
  width: 100%;
  object-fit: cover;
  height: 60px;
  margin-bottom: 1.2rem;
`;
