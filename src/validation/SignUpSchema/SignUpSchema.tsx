import * as Yup from 'yup';

export const SignUpSchema = Yup.object({
  fullName: Yup.string().required('Full name is Required'),
  email: Yup.string().email('Invalid Email').required('Email is Required'),
  password: Yup.string().required('Password is Required'),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords ')
    .required('Passwords is required'),
});
