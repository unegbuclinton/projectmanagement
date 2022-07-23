import React from 'react';
import { Container, Input } from './styles';

interface Props {
  placeholder: string;
  className?: string;
}
const InputField: React.FC<Props> = ({ placeholder, className }) => {
  return (
    <Container className={className}>
      <Input placeholder={placeholder} />
    </Container>
  );
};

export default InputField;
