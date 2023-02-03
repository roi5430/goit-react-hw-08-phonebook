import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { register } from 'redux/auth/operations';
import css from '../RegisterForm/RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(state => state.auth.error);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    toast.success('You are successfully regestrired');
    form.reset();
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label}>
          Username
          <input
            type="text"
            name="name"
            id="name"
            className={css.input}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.label}>
          Email
          <input
            type="text"
            name="email"
            className={css.input}
            message="Please enter valid email"
            required
          />
        </label>
        <label className={css.label}>
          Password
          <input
            className={css.input}
            minLength="7"
            type="password"
            name="password"
            placeholder="more then 7 symbols"
          />
        </label>
        <button className={css.btn} type="submit">
          Register
        </button>
      </form>
      {error && toast.error(' Something whent wrong, please try again')}
    </>
  );
};
