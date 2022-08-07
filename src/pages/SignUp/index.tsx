import { useFormik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../api/auth/authentication';
import ErrorMessage from '../../components/atoms/ErrorMessage';
import InputField from '../../components/atoms/input/Input';
import { DPIconStartBtn } from '../../icons';
import { SignUpSchema } from '../../validation/SignUpSchema/SignUpSchema';
import {
  AddedInfo,
  InputWrapper,
  NavigateLink,
  OctaBoxContainer,
  OctaText,
  SignUpForm,
  SignUpHeader,
  SignUpWrapper,
  SubmitButton,
} from './styles';
interface AppProps {}
const SignUp: React.FC<AppProps> = () => {
  const navigate = useNavigate();
  interface values {
    fullName: string;
    email: string;
    password: string;
    repeatPassword: string;
  }
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      password: '',
      repeatPassword: '',
    },
    validationSchema: SignUpSchema,
    onSubmit: (values: values) => {
      registerUser(values.email, values.password);
      navigate('/dashboard');
    },
  });
  return (
    <SignUpWrapper>
      <SignUpHeader>Hi, lets get you started.</SignUpHeader>
      <SignUpForm onSubmit={formik.handleSubmit}>
        <InputWrapper>
          <InputField
            type="text"
            placeholder="Full Name"
            inputClass="signup-input"
            id="fullName"
            name="fullName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fullName}
          />
          {formik.touched.fullName && formik.errors.fullName ? (
            <ErrorMessage text={formik.errors.fullName} />
          ) : null}
        </InputWrapper>
        <InputWrapper>
          <InputField
            type="text"
            placeholder="Email"
            inputClass="signup-input"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <ErrorMessage text={formik.errors.email} />
          ) : null}
        </InputWrapper>
        <InputWrapper>
          <InputField
            type="text"
            placeholder="Password"
            inputClass="signup-input"
            id="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <ErrorMessage text={formik.errors.password} />
          ) : null}
        </InputWrapper>
        <InputWrapper>
          <InputField
            type="text"
            placeholder="Rewrite Password"
            inputClass="signup-input"
            id="repeatPassword"
            name="repeatPassword"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.repeatPassword}
          />
          {formik.touched.repeatPassword && formik.errors.repeatPassword ? (
            <ErrorMessage text={formik.errors.repeatPassword} />
          ) : null}
        </InputWrapper>
        <OctaBoxContainer>
          <OctaText>Sign Up</OctaText>
          <SubmitButton type="submit">
            <DPIconStartBtn />
          </SubmitButton>
        </OctaBoxContainer>
        <AddedInfo>
          Already have an account?<NavigateLink to="/login">Login</NavigateLink>
        </AddedInfo>
      </SignUpForm>
    </SignUpWrapper>
  );
};

export default SignUp;
