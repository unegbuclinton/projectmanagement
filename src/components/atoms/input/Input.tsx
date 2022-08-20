import React, { useState } from 'react';
import { DPIconHide, DPIconUnHide } from '../../../icons';
import { Container, Input, InputFieldIcon } from './styles';

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
  const [show, setShow] = useState(false);
  const toggleShowPassword = () => setShow((prev) => !prev);
  return (
    <Container className={className}>
      <Input
        placeholder={placeholder}
        type={type === 'password' ? (show ? 'text' : 'password') : type}
        className={inputClass}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />

      {type && (
        <InputFieldIcon onClick={toggleShowPassword}>
          {show ? (
            <DPIconHide className="icon" />
          ) : (
            <DPIconUnHide className="icon" />
          )}
        </InputFieldIcon>
      )}
    </Container>
  );
};

export default InputField;
