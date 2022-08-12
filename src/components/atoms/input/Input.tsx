import React from 'react';
import { Container, Input } from './styles';

interface Props {
  placeholder?: string;
  type: string;
  className?: string;
  inputClass?: string;
  id?: string;
  name?: string;
  value?: string;
  onChange: (e: any) => void;
  onBlur: (e: any) => void;
}
const InputField: React.FC<Props> = ({
  placeholder,
  className,
  type,
  inputClass,
  id,
  name,
  value,
  onBlur,
  onChange,
}) => {
  return (
    <Container className={className}>
      <Input
        placeholder={placeholder}
        type={type}
        className={inputClass}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </Container>
  );
};

export default InputField;
