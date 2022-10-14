import React from "react";
import { nanoid } from "nanoid";

import { Form } from "./Form/Form";
import ContactList from "./ContactList/ContactList";
import{Wrapper,TitleH1,} from "./App.styled"

export class App extends React.Component {
  state = {
    contacts: [],
    filter: "",
  };

  addContakts = (contacts) => {
    if (this.isDuplicate(contacts)) {
      return alert(`${contacts.name} - ${contacts.number} is allready in contacts`)
    }
    this.setState((prev) => {
      const newContsct = {
        id: nanoid(),
        ...contacts
      }
      return {
        contacts: [...prev.contacts, newContsct]
      }
    })
  };

  removeContacts = (id) => {
    this.setState((prev) => {
      const newContacts = prev.contacts.filter((item) => item.id !== id);
      return {
        contacts: newContacts
      }
    })
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    })
  };

  isDuplicate ({name,number}) {
    const { contacts } = this.state;
    const result = contacts.find((item) => item.name === name || item.number === number);
    return result;
  };

  getFilterContact () {
    const { contacts, filter } = this.state;
    if (!filter) {
      return contacts
    };

    const normalizedFilter = filter.toLocaleLowerCase();
    const filtredContacts = contacts.filter(({ name, number }) => {
      
      const normalizedName = name.toLocaleLowerCase();
      const normalizedNumber = number.toLocaleLowerCase();
      const result = normalizedName.includes(normalizedFilter) || normalizedNumber.includes(normalizedFilter);
      return result;
    })
    return filtredContacts;
  }
  componentDidMount() {
    const contact = localStorage.getItem('CONTACTS')
    const parseContact = JSON.parse(contact)
    if (parseContact) {
      this.setState({contacts: parseContact})
    };
  };
  
  componentDidUpdate(prevProps,prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('CONTACTS',JSON.stringify(this.state.contacts))
    }
  }

  render() {
    const { addContakts,handleChange, removeContacts } = this;
    const { filter } = this.state;
    const contacts = this.getFilterContact();
    return (
      <Wrapper>
        <TitleH1>Phonebook</TitleH1>
        <Form onSubmit={ addContakts} />
        <h2>Contacts</h2>
        <div>
          <h3>Find contacts by name</h3>
          <input type="text" name="filter" onChange={handleChange} value={filter} />
          <ContactList items={ contacts} removeContacts={removeContacts} />
        </div>
        
      </Wrapper>
    );
  };
};
