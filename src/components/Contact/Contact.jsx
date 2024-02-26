import css from '../Contact/Contact.module.css';
import { BsFillPersonFill } from 'react-icons/bs';
import { BsFillTelephoneFill } from 'react-icons/bs';

function Contact({ info, onDelete }) {
  return (
    <div className={css.card}>
      <div className={css.container}>
        <p className={css.name}>
          <BsFillPersonFill className={css.icon} />
          {info.name}
        </p>
        <p className={css.number}>
          <BsFillTelephoneFill className={css.icon} />
          {info.number}
        </p>
      </div>
      <button
        className={css.btn}
        onClick={() => {
          onDelete(info.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default Contact;
