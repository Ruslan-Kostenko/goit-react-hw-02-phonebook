import { Formik, Field, Form, ErrorMessage} from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import { StyledForm } from './PhoneBook.styled';


const schema = Yup.object().shape({
    Name: Yup.string()
      .matches(/^[A-Za-zА-Яа-яЁё\s]+$/, 'Invalid name')
      .required('This is required!')
      .min(1, 'Too Short!')
      .max(50, 'Too Long!'),
    Number: Yup.string()
      .matches(/^\+?[0-9]{1,3}-?[0-9]+$/, 'Invalid number')
      .required('This is required!')
      .min(6, 'Too Short!')
      .max(20, 'Too Long!'),
  });

export const PhoneBook = ({addContact}) => {
  return (
    <Formik
      initialValues={{
        Name: '',
        Number: '',
      }}
      validationSchema={schema}

      onSubmit={ (values, actions) => {
        addContact({...values, id:nanoid()});
        actions.resetForm();
      }}
    >
      <StyledForm>
        <label htmlFor="Name">Name
        <Field name="Name" placeholder="Name" />
        <ErrorMessage name="Name" component="div" />
        </label>

        <label htmlFor="Number">Number
        <Field name="Number" placeholder="Number" />
        <ErrorMessage name="Number" component="div" />
        </label>
        
        <button type="submit">Add contact</button>
      </StyledForm>
    </Formik>
  );
};
