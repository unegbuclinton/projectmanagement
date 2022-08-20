import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { FONTSIZES } from '../../constants/fonts';
import {
  DPIconAddButton,
  DPIconDashboard,
  DPIconMessage,
  DPIconProject,
  DPIconSettings,
} from '../../icons';
import img from '../../icons/img/profile.jpg';
import ProfileDropDown from '../molecules/profileDropdown';

interface Props {
  children: React.ReactNode;
  text?: string;
  onClick?: () => void;
}

const DashBoardLayout: React.FC<Props> = ({ children, text, onClick }) => {
  const [header, setHeader] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const ChangeNavbar = () => {
    if (window.scrollY >= 90) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  window.addEventListener('scroll', ChangeNavbar);

  const navigate: any = useNavigate();

  const ref: any = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (showNav && ref.current && !ref.current.contains(e.target)) {
        setShowNav(false);
      }
    };

    document.body.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      document.body.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [showNav]);

  return (
    <DashBoardWrapper>
      <DashBoardHeader header={header}>
        <h1 className="dashboard-header"> {text}</h1>
        <div
          className="img-container"
          onClick={() => setShowNav((prev) => !prev)}
          ref={ref}
        >
          <img src={img} alt="" />
        </div>
      </DashBoardHeader>
      {showNav && <ProfileDropDown />}

      <DashboardContent> {children}</DashboardContent>
      <DashBoardFooter>
        <div className="footer-item">
          <DashBoardContainer onClick={() => navigate('/dashboard')}>
            <span className="bar-icon">
              <DPIconDashboard />
            </span>
            {/* <span className="bar-text">DashBoard </span> */}
          </DashBoardContainer>
          <DashBoardContainer onClick={() => navigate('/message')}>
            <span className="bar-icon">
              <DPIconMessage />
            </span>
            {/* <span className="bar-text">Message </span> */}
          </DashBoardContainer>
        </div>
        <div className="footer-item">
          <DashBoardContainer onClick={() => navigate('/projects')}>
            <span className="bar-icon">
              <DPIconProject />
            </span>
            {/* <span className="bar-text">Projects </span> */}
          </DashBoardContainer>
          <DashBoardContainer onClick={() => navigate('/settings')}>
            <span className="bar-icon">
              <DPIconSettings />
            </span>
            {/* <span className="bar-text">Settings </span> */}
          </DashBoardContainer>
        </div>
        <DPIconAddButton className="add-btn" onClick={onClick} />
      </DashBoardFooter>
    </DashBoardWrapper>
  );
};

export default DashBoardLayout;

const DashBoardWrapper = styled.div`
  height: 100%;
`;

const DashBoardHeader = styled.div<{ header: boolean }>`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3rem;
  padding: 2rem 0;
  background: ${({ header }) => (header ? '#101010' : 'transparent')};
  .dashboard-header {
    color: ${COLORS.white};
    font-size: ${FONTSIZES.xxlarge};
    margin-left: 2rem;
  }

  .img-container {
    width: 4rem;
    border-radius: 50%;
    height: 4rem;
    border: 1px solid ${COLORS.white};
    margin-right: 3rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      border-radius: 50%;
    }
  }
`;
const DashboardContent = styled.div`
  padding-bottom: 9rem;
`;
const DashBoardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  height: 7.8rem;
  width: 100%;
  padding: 2rem 3rem 0 3rem;
  background: ${COLORS.black};
  border-top-left-radius: 1.4rem;
  border-top-right-radius: 1.4rem;

  .footer-item {
    display: flex;
    gap: 2rem;
  }

  .add-btn {
    position: absolute;
    top: 0px;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const DashBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  .bar-text {
    color: ${COLORS.white};
  }
`;
