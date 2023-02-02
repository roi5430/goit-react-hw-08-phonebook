import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

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
    form.reset();
  };

  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
  });

  return (
    <>
      <form
        className={css.form}
        onSubmit={handleSubmit}
        validationSchema={schema}
        autoComplete="off"
      >
        <label className={css.label}>
          Username
          <input type="text" name="name" id="name" />
        </label>
        <label className={css.label}>
          Email
          <input type="email" name="email" id="email" />
        </label>
        <label className={css.label}>
          Password
          <input
            id="pass"
            type="password"
            name="password"
            placeholder="more then 6 symbols"
          />
        </label>
        <button type="submit">Register</button>
      </form>
      {error && <p>Something whent wrong, please try again</p>}
    </>
  );
};
