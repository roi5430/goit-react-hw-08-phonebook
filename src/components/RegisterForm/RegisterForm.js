import { useDispatch } from 'react-redux';
// import * as yup from 'yup';
import { register } from 'redux/auth/operations';
import css from '../RegisterForm/RegisterForm.module.css';

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

  // const schema = yup.object().shape({
  //   name: yup.string().required(),
  //   email: yup.string().email().required(),
  //   password: yup.string().min(6).required(),
  // });

  return (
    <>
      <form
        className={css.form}
        onSubmit={handleSubmit}
        // validationSchema={schema}
        autoComplete="off"
      >
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
          <input type="email" name="email" id="email" className={css.input} />
        </label>
        <label className={css.label}>
          Password
          <input
            className={css.input}
            id="pass"
            type="password"
            name="password"
            placeholder="more then 7 symbols"
          />
        </label>
        <button className={css.btn} type="submit">
          Register
        </button>
      </form>
    </>
  );
};
