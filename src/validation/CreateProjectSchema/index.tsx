import * as Yup from 'yup';

export const CreateProjectSchema = Yup.object({
  title: Yup.string().required('Title is Required'),
  description: Yup.string().required('Description is Required'),
});
