import css from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { contactsFilter } from 'redux/filtersSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterSelector = useSelector(state => state.filter);

  return (
    <label className={css.filter__label}>
      <span className={css.filter__text}>Find contacts by name</span>
      <input
        className={css.filter__input}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Enter the person's name"
        value={filterSelector}
        onInput={e => dispatch(contactsFilter(e.target.value.toLowerCase()))}
      />
    </label>
  );
};
