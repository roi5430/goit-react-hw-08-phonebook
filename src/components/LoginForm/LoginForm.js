import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { logIn } from 'redux/auth/operations';
import css from '../RegisterForm/RegisterForm.module.css';

export const LoginForm = ({ isLoading }) => {
  const dispatch = useDispatch();
  const error = useSelector(state => state.auth.error);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const onChange = e => {
    const { name, value } = e.target;

    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

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
    toast.success('You are successfully logged in');
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label}>
          Email
          <input
            type="email"
            name="email"
            className={css.input}
            onChange={onChange}
            value={formData.email}
            required
          />
        </label>
        <label className={css.label}>
          Password
          <input
            type="password"
            name="password"
            className={css.input}
            minLength="7"
            onChange={onChange}
            value={formData.password}
            required
          />
        </label>
        <button className={css.btn} type="submit" disabled={isLoading}>
          Log In
        </button>
      </form>
      {error && toast.error(' Something whent wrong, please try again')}
    </>
  );
};
