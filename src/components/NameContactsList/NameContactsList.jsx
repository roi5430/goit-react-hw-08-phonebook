import css from './NameContactsList.module.css';
import { deleteContact } from '../../redux/operations';
import { useDispatch, useSelector } from 'react-redux';

export const NameContactsList = () => {
  const dispatch = useDispatch();
  const contactsItem = useSelector(state => state.contacts.items);
  const filterValue = useSelector(state => state.filter);
  console.log(filterValue);
  console.log(contactsItem);
  const visibleContacts = contactsItem.filter(contact =>
    contact.name.toLowerCase().includes(filterValue)
  );

  return (
    <div className={css.contacts}>
      <ul className={css.contacts__list}>
        {visibleContacts.length > 0
          ? visibleContacts.map(item => {
              const { id, name, phone } = item;
              return (
                <li key={id}>
                  <div className={css.item__content}>
                    {name}: {phone}
                    <button
                      className={css.contacts__btn}
                      type="button"
                      onClick={() => dispatch(deleteContact(id))}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
};
