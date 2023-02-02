import css from './AppBar.module.css';

export const AppBar = ({ children }) => {
  return <header className={css.header}>{children}</header>;
};
