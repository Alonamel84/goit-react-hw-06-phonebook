import { useEffect } from 'react';
import ContactForm from './components/ContactForm';
import './App.css';
import FilterName from './components/FilterName';
import ContactList from './components/ContactsList/ContactsList';
import s from './components/data/data.module.css';
import { connect } from 'react-redux';
import { addContact } from './redux/actions';
import { filterContact, deleteContact } from './redux/actions';
import shortid from 'shortid';
const App = ({ addContact, contacts, filter, deleteContact, filterContact }) => {
  //================REACT VERSION=======================//
  // const [contacts, setContacts] = useState([]);
  // const [filter, setFilter] = useState('');
  //===================================================//
  useEffect(() => {
    const savedContact = JSON.parse(localStorage.getItem('keyContact'));
    //================REACT VERSION=======================//
    // if (savedContact) savedContact;
    //===================================================//
  }, []);

  useEffect(() => {
    if (prev => prev !== contacts) {
      localStorage.setItem('keyContact', JSON.stringify(contacts));
    }
  });

  const handleSubmit = data => {
    const contact = { id: shortid.generate(), ...data };
    addContact(contact);
    //===========REACT VERSION================//
    // setContacts(prev => {
    //   return [...prev, contact];
    // });
    //=====================================//
  };

  function filterName(e) {
    e.preventDefault();
    filterContact(e.currentTarget.value);
    //=============REACT VERSION================//
    // setFilter(e.currentTarget.value);
    //=========================================//
  }

  const filterArr = () => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  };

  const onDelete = id => {
    deleteContact(id);
    ///--------------REACT VERSION-------------------//
    // /type: contactItem/deleteContact,
    // payload: id
    // setContacts(prev => prev.filter(item => item.id !== id));
    // addContact(contact).filter(item => item.id !== id);
    //-------------------------------------------------///
  };

  const filterContacts = filterArr();
  //------------REACT VERSION------------////
  // const filterContacts = filterArr();
  //---------------------------------------///
  return (
    <div className={s.container}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm onSubmit={handleSubmit} contact={contacts}></ContactForm>
      <h2 className={s.title}>Contacts</h2>
      <FilterName onChange={filterName}></FilterName>
      <ContactList filterContacts={filterContacts} onDelete={onDelete}></ContactList>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => {
  return {
    contacts: state.contacts.items,
    filter: state.contacts.filter,
  };
};
const mapDispatchToProps = {
  addContact,
  filterContact,
  deleteContact,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
