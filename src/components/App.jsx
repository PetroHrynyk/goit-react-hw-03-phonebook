import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export default class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(prevState);
    // console.log(this.state);
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  addContact = newContact => {
    const { contacts } = this.state;
    if (
      contacts.find(
        ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      return alert(`${newContact.name} is already in contacts.`);
    } else {
      return this.setState({ contacts: [...contacts, newContact] });
    }
  };

  filterSearch = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  contactsRender = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(i =>
      i.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  onDeleteContact = e => {
    const contactId = e.currentTarget.id;
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactId),
    }));
  };

  render() {
    return (
      <div
        style={{
          width: 270,
          textAlign: 'center',
          marginLeft: 8,
          padding: '12px 16px',
          borderRadius: 4,
          backgroundColor: 'gray',
          color: 'white',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} onChange={this.filterSearch} />
        <ContactList
          contacts={this.contactsRender()}
          onDeleteContact={this.onDeleteContact}
        />
      </div>
    );
  }
}
