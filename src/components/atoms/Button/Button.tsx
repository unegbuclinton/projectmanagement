import React from 'react';

type ButtonProps = {
  disabled?: boolean;
  className?: string;
  children: string;
  pill?: string;
  type: string;
  alias?: string;
  loading?: string;
};

const Button: React.FC<ButtonProps> = ({className, disabled}) => {
  return (
    <button className={className} disabled={disabled}>
      Button
    </button>
  );
};

export default Button;
