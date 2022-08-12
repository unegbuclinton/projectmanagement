import { useFormik } from 'formik';
import React from 'react';
import { CreateProjectSchema } from '../../../validation/CreateProjectSchema/index';
import ErrorMessage from '../../atoms/ErrorMessage/index';
import InputField from '../../atoms/input/Input';
import {
  CreateprojectForm,
  CreateprojectWrapper,
  InputLabel,
  InputWrapperr,
  ProjectDetailHeader,
  ProjectHeader,
} from './styles';

import { DPIconAssignee, DPIconCalendar } from '../../../icons';
import Button from '../../atoms/Button/Button';

interface Props {}

export const CreateProjectModalComponent: React.FC<Props> = () => {
  interface values {
    title: string;
    description: string;
    date: any;
  }

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      date: '',
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
          <ProjectHeader>Create Project</ProjectHeader>
          <InputLabel>Title</InputLabel>
          <InputField
            type="text"
            placeholder="Full Name"
            inputClass="input-style"
            id="title"
            name="title"
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
            type="text"
            placeholder="Email"
            inputClass="input-style"
            id="description"
            name="description"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
          />
          {formik.touched.description && formik.errors.description ? (
            <ErrorMessage text={formik.errors.description} />
          ) : null}
        </InputWrapperr>

        <InputWrapperr>
          <ProjectDetailHeader>Project Details</ProjectDetailHeader>
          <div className="details-container">
            <span>
              <DPIconCalendar />
            </span>
            <InputField
              inputClass="input-style"
              type="date"
              id="date"
              name="date"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.date}
            />
          </div>

          <div className="details-container">
            <span>
              <DPIconAssignee />
            </span>
            <div className="assign-box">
              <div className="assign-box__item"></div>
              <div className="assign-box__item"></div>
            </div>
          </div>
        </InputWrapperr>
        <div className="btn-wrapper">
          <Button type="submit" className="create-project__btn">
            Create Project
          </Button>
        </div>
      </CreateprojectForm>
    </CreateprojectWrapper>
  );
};
