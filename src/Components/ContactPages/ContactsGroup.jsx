import React from "react";
import PropTypes from "prop-types";
import Contact from "./Contact";

const ContactsGroup = ({ title, contacts, favoriteClick, deleteContact, updateClick, wrapperStyle }) => {
  if (!contacts || contacts.length === 0) {
    return (
      <div className="col-12 py-2" style={{ borderRadius: "10px", backgroundColor: "#323637", ...wrapperStyle }}>
        <div className="text-center text-white-50">{title}</div>
        <div className="p-2 text-center text-white-50">No contacts</div>
      </div>
    );
  }

  return (
    <div className="col-12 py-2" style={{ borderRadius: "10px", backgroundColor: "#323637", ...wrapperStyle }}>
      <div className="text-center text-white-50">{title}</div>
      <div className="p-2">
        {contacts.map((contact) => (
          <Contact
            key={contact.id ?? contact.email ?? contact.phone} 
            contact={contact}
            favoriteClick={favoriteClick}
            deleteContact={deleteContact}
            updateClick={updateClick}
          />
        ))}
      </div>
    </div>
  );
};

ContactsGroup.propTypes = {
  title: PropTypes.string.isRequired,
  contacts: PropTypes.array.isRequired,
  favoriteClick: PropTypes.func,
  deleteContact: PropTypes.func,
  updateClick: PropTypes.func,
  wrapperStyle: PropTypes.object,
};

export default ContactsGroup;