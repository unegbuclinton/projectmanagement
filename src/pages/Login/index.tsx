import { useFormik } from 'formik';
import React from 'react';
import InputField from '../../components/atoms/input/Input';
import { DPIconStartBtn } from '../../icons';
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

    onSubmit: (values: values) => {
      console.log(values);
    },
  });
  return (
    <LoginWrapper>
      <LoginHeader>Welcome Back </LoginHeader>
      <LoginForm onSubmit={formik.handleSubmit}>
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
