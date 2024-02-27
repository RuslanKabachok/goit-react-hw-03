import { useId } from 'react';
import css from '../SearchBox/SearchBox.module.css';

function SearchBox({ filter, onFilter }) {
  const searchId = useId();

  return (
    <form className={css.form}>
      <p className={css.text}>Find contacts by name</p>
      <input
        type="text"
        name="searchQuery"
        id={searchId}
        className={css.search}
        value={filter}
        onChange={(e) => {
          onFilter(e.target.value);
        }}
      />
    </form>
  );
}

export default SearchBox;
