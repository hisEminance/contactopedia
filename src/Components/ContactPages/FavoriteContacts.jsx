import React from "react";
import ContactsGroup from "./ContactsGroup";

const FavoriteContacts = (props) => {
  return (
    <ContactsGroup
      title="Favorites"
      contacts={props.contacts}
      favoriteClick={props.favoriteClick}
      deleteContact={props.deleteContact}
      updateClick={props.updateClick}
    />
  );
};

export default FavoriteContacts;