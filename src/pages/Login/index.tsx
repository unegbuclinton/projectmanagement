import { useFormik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../api/auth/authentication';
import ErrorMessage from '../../components/atoms/ErrorMessage';
import InputField from '../../components/atoms/input/Input';
import { DPIconStartBtn } from '../../icons';
import { loginSchema } from '../../validation/Schema';
import { LoginForm, LoginHeader, LoginWrapper, NavigateLink } from './styles';

const LoginPage: React.FC<{}> = () => {
  const navigate = useNavigate();
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
      loginUser(values.email, values.password);

      navigate('/dashboard');
    },
  });

  return (
    <LoginWrapper>
      <LoginHeader>Welcome Back </LoginHeader>
      <LoginForm onSubmit={formik.handleSubmit}>
        <div className="input-wrapper">
          <InputField
            type=""
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
            type="password"
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
        <NavigateLink to="/sign-up"> Sign Up</NavigateLink>
      </LoginForm>
    </LoginWrapper>
  );
};

export default LoginPage;
