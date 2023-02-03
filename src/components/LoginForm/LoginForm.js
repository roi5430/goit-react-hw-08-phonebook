import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from '../RegisterForm/RegisterForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        Email
        <input type="email" name="email" className={css.input} />
      </label>
      <label className={css.label}>
        Password
        <input type="password" name="password" className={css.input} />
      </label>
      <button className={css.btn} type="submit">
        Log In
      </button>
    </form>
  );
};
