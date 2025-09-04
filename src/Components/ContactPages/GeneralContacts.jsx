import React from "react";
import ContactsGroup from "./ContactsGroup";
const GeneralContacts = (props) => {
  return (
    <ContactsGroup
      title="Other Contacts"
      contacts={props.contacts}
      favoriteClick={props.favoriteClick}
      deleteContact={props.deleteContact}
      updateClick={props.updateClick}
    />
  );
};

export default GeneralContacts;