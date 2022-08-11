import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { FONTSIZES, FONTWEIGHTS } from '../../constants/fonts';

interface ModalProps {
  isShown?: any;
  hide?: boolean | undefined | React.MouseEventHandler | any;
  children?: React.ReactNode;
  className?: string;
  showClose?: boolean;
  header?: string;
  modalContent?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  children,
  isShown,
  hide,
  showClose,
  className,
  header,
  modalContent,
}) => {
  const modal = (
    <ModalWrapper>
      <div className='modal-container'>
        <Backdrop onClick={hide} />
        <Wrapper>
          <Header>
            {/* {showClose && <DPIconClose className='close-btn' onClick={hide} />} */}
            {header}
          </Header>
          <Content className={className}>{modalContent ?? children}</Content>
        </Wrapper>
      </div>
    </ModalWrapper>
  );
  return isShown ? createPortal(modal, document.body) : null;
};

const ModalWrapper = styled.div`
  .modal-container {
    display: flex;
    gap: 1.6rem;
  }
`;
const Wrapper = styled.div`
  position: absolute;
  top: 2rem;
  z-index: 70;
  width: 100%;
  max-width: 65rem;
  outline: 0;
  /* height: 100%; */
  max-height: calc(100vh - 14rem);
  display: flex;
  flex-direction: column;
`;

const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 50;
  background: ${COLORS['smoky-black']};
  cursor: pointer;
`;

const Header = styled.div`
  min-height: 7.2rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${COLORS.white};
  font-weight: ${FONTWEIGHTS.medium};
  font-size: ${FONTSIZES.lg};

  .close-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 2.1rem;
    cursor: pointer;
  }
`;

const Content = styled.div`
  overflow-y: auto;
  max-height: max-content;
`;
