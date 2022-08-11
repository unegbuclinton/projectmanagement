import React from 'react';

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
    <button className={className} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
