import { useFormik } from 'formik';
import React from 'react';
import ErrorMessage from '../../components/atoms/ErrorMessage';
import InputField from '../../components/atoms/input/Input';
import { DPIconStartBtn } from '../../icons';
import { loginSchema } from '../../validation/Schema';
import { LoginForm, LoginHeader, LoginWrapper } from './styles';

const LoginPage: React.FC<{}> = () => {
  interface values {
    email: string;
    password: string;
  }
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,

    onSubmit: (values: values) => {
      console.log(values);
    },
  });
  console.log(formik.errors);
  return (
    <LoginWrapper>
      <LoginHeader>Welcome Back </LoginHeader>
      <LoginForm onSubmit={formik.handleSubmit}>
        <div className="input-wrapper">
          <InputField
            type="text"
            placeholder="Email Address"
            inputClass="login-input"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <ErrorMessage text={formik.errors.email} />
          ) : null}
        </div>

        <div className="input-wrapper">
          <InputField
            type="text"
            placeholder="Password"
            inputClass="login-input"
            id="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <ErrorMessage text={formik.errors.password} />
          ) : null}
        </div>
        <div className="cta-box">
          <p className="cta-box__text"> Sign In</p>
          <button type="submit">
            <DPIconStartBtn />
          </button>
        </div>
        <p className="added-info">Don’t have an account?</p>
        <span> Sign Up</span>
      </LoginForm>
    </LoginWrapper>
  );
};

export default LoginPage;
