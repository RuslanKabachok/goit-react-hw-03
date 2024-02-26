import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import { useId } from 'react';
import * as Yup from 'yup';
import css from '../ContactForm/ContactForm.module.css';

function ContactForm({ onAdd }) {
  const nameId = useId();
  const numberId = useId();
  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    number: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  });

  const handleSubmit = (values, actions) => {
    onAdd({
      id: nanoid(),
      name: values.name,
      number: values.number,
    });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={css.form}>
        <label htmlFor={nameId}>Name</label>
        <Field
          className={css.field}
          type="text"
          id={nameId}
          name="name"
        ></Field>
        <ErrorMessage name="name" as="span" />
        <label htmlFor={numberId}>Number</label>
        <Field
          className={css.field}
          type="text"
          id={numberId}
          name="number"
        ></Field>
        <ErrorMessage name="number" as="span" />
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
