import { Formik, Form, Field } from 'formik';
import { useId } from 'react';
import css from '../SearchBar/SearchBar.module.css';

function SearchBar({ filter, onFilter }) {
  const searchId = useId();

  return (
    <Formik initialValues={{}}>
      <Form className={css.form}>
        <p className={css.text}>Find contacts by name</p>
        <Field
          type="text"
          name="searchQuery"
          id={searchId}
          className={css.search}
          value={filter}
          onChange={(e) => {
            onFilter(e.target.value);
          }}
        />
      </Form>
    </Formik>
  );
}

export default SearchBar;
