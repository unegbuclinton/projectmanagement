import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
  pill?: string;
  type: string;
  alias?: string;
  loading?: string;
};

const Button: React.FC<ButtonProps> = ({ className, disabled, children }) => {
  return (
    <ButtonWrapper className={className} disabled={disabled}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;

const ButtonWrapper = styled.button`
  outline: none;
  border: none;
`;
