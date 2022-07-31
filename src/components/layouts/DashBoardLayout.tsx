import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import {
  DPIconAddButton,
  DPIconDashboard,
  DPIconMessage,
  DPIconProject,
  DPIconSettings,
} from '../../icons';

interface Props {
  children: React.ReactNode;
}
const DashBoardLayout: React.FC<Props> = ({ children }) => {
  return (
    <DashBoardWrapper>
      {children}
      <DashBoardFooter>
        <div className="footer-item">
          <DashBoardContainer>
            <span className="bar-icon">
              <DPIconDashboard />
            </span>
            {/* <span className="bar-text">DashBoard </span> */}
          </DashBoardContainer>
          <DashBoardContainer>
            <span className="bar-icon">
              <DPIconMessage />
            </span>
            {/* <span className="bar-text">Message </span> */}
          </DashBoardContainer>
        </div>
        <div className="footer-item">
          <DashBoardContainer>
            <span className="bar-icon">
              <DPIconProject />
            </span>
            {/* <span className="bar-text">Projects </span> */}
          </DashBoardContainer>
          <DashBoardContainer>
            <span className="bar-icon">
              <DPIconSettings />
            </span>
            {/* <span className="bar-text">Settings </span> */}
          </DashBoardContainer>
        </div>
        <DPIconAddButton className="add-btn" />
      </DashBoardFooter>
    </DashBoardWrapper>
  );
};

export default DashBoardLayout;

const DashBoardWrapper = styled.div``;

const DashBoardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
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
    top: -35px;
    left: 132px;
  }
`;

const DashBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  .bar-text {
    color: ${COLORS.white};
  }
`;
