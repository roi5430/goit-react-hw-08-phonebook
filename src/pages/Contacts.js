import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Helmet } from 'react-helmet';
import { NameContactsList } from '../components/NameContactsList/NameContactsList';
import { PhonebookForm } from 'components/PhonebookForm/PhonebookForm';
import { Filter } from '../components/Filter/Filter';

import { fetchContacts } from '../redux/operations';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.contacts.isLoading);
  const error = useSelector(state => state.contacts.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {/* <Helmet> */}
      <title>Phonebook</title>
      {/* </Helmet> */}
      <PhonebookForm />
      <h2>Contacts</h2>
      {isLoading && !error && <p>Request in progress...</p>}
      <Filter />
      <NameContactsList />
    </>
  );
}
