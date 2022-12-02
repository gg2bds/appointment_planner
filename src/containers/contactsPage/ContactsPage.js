import React, {useState, useEffect} from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const contacts= props.contacts;
  const addContact = props.addContact;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [duplicateName, setDuplicateName] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if(!duplicateName){
      addContact(name, phone, email);
      setName('');
      setPhone('');
      setEmail('');
    }

  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
    for(const contact of contacts){
      if(name === contact.name){
        setDuplicateName(true);
      }

      return;
    }
  },[contacts, name]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm handleSubmit={handleSubmit}
          name={name} setName={setName}
          phone={phone} setPhone={setPhone}
          email={email} setEmail={setEmail}
        /> 
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList objArr={props.contacts} />
      </section>
    </div>
  );
};
