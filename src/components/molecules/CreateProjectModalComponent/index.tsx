import { useFormik } from 'formik';
import React from 'react';
import { CreateProjectSchema } from '../../../validation/CreateProjectSchema/index';
import ErrorMessage from '../../atoms/ErrorMessage/index';
import InputField from '../../atoms/input/Input';
import {
  AddedInfo,
  CreateprojectForm,
  CreateprojectHeader,
  CreateprojectWrapper,
  InputLabel,
  InputWrapperr,
  NavigateLink,
  OctaBoxContainer,
  OctaText,
  ProjectTypeWrapper,
  SubmitButton,
} from './styles';

import Button from '../../atoms/Button/Button';

interface Props {}

export const CreateProjectModalComponent: React.FC<Props> = ({}) => {
  interface values {
    title: string;
    description: string;
  }

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
    },
    validationSchema: CreateProjectSchema,
    onSubmit: (values: values) => {
      console.log(values);
    },
  });
  return (
    <CreateprojectWrapper>
      <CreateprojectForm onSubmit={formik.handleSubmit}>
        <InputWrapperr>
          <InputLabel>Title</InputLabel>
          <InputField
            type='text'
            placeholder='Full Name'
            inputClass='Createproject-input'
            id='title'
            name='title'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
          />
          {formik.touched.title && formik.errors.title ? (
            <ErrorMessage text={formik.errors.title} />
          ) : null}
        </InputWrapperr>
        <InputWrapperr>
          <InputLabel>Description</InputLabel>
          <InputField
            type='text'
            placeholder='Email'
            inputClass='Createproject-input'
            id='description'
            name='description'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
          />
          {formik.touched.description && formik.errors.description ? (
            <ErrorMessage text={formik.errors.description} />
          ) : null}
        </InputWrapperr>
        <InputWrapperr>
          <InputLabel>Project Type</InputLabel>
          <ProjectTypeWrapper>
            <Button type='button' className='design-button'>
              Design
            </Button>
            <Button type='button' className='integration-button'>
              Integration
            </Button>
            <Button type='button' className='dashboard-button'>
              Dashboard
            </Button>
            <Button type='button' className='lanndigpage-button'>
              Landing Page
            </Button>
            <Button type='button' className='illustration-button'>
              Illustration
            </Button>
          </ProjectTypeWrapper>
        </InputWrapperr>
        <InputWrapperr>
          <InputLabel>Project Details</InputLabel>
        </InputWrapperr>
      </CreateprojectForm>
    </CreateprojectWrapper>
  );
};
