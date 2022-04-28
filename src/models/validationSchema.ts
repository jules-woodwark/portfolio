import { object, string } from 'yup';

export const validationSchema = object({
  name: string()
    .required('Your name is required!')
    .min(1, 'Your name is too short!')
    .max(100, 'Your name is too Long!'),
  email: string()
    .required('An email is required!')
    .email('Your Email is invalid'),
  message: string()
    .required('A message is required!')
    .min(1, 'Your message is too short!')
    .max(5000, 'Your message is too Long!'),
});
