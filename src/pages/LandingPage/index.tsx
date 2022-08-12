import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DPIconStartBtn } from '../../icons';
import {
  LandingPageContainer,
  LandingPageHeader,
  LandingPageText,
  LandingPageWrapper,
} from './styles';

interface Props {}

const LandingPage: React.FC<Props> = () => {
  const navigate = useNavigate();
  return (
    <LandingPageWrapper>
      <LandingPageHeader>
        Work and Grow in a more organizes way.
      </LandingPageHeader>
      <LandingPageContainer>
        <LandingPageText>
          Create,collaborate and organize your project in one place.
        </LandingPageText>
        <div className='cta-box'>
          <p className='cta-box__text'> Get Started</p>
          <DPIconStartBtn onClick={() => navigate('/login')} />
        </div>
      </LandingPageContainer>
    </LandingPageWrapper>
  );
};

export default LandingPage;
