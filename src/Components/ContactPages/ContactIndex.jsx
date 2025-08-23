import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import AddContact from "./AddContact";
import AddRandomContact from "./AddRandomContact";
import FavoriteContacts from "./FavoriteContacts";
import GeneralContacts from "./GeneralContacts";
import RemoveAllContacts from "./RemoveAllContacts";
import React, { useState } from "react";

const ContactIndex = () => {
    const [contactList, setContactList] = useState ([
         {
      id: 1,
      name: "Ben Parker",
      phone: "666-666-7770",
      email: "ben@dotnetmastery.com",
      isFavorite: false,
    },
    {
      id: 2,
      name: "Kathy Patrick",
      phone: "111-222-0000",
      email: "kathy@dotnetmastery.com",
      isFavorite: true,
    },
    {
      id: 3,
      name: "Paul Show",
      phone: "999-222-1111",
      email: "paul@dotnetmastery.com",
      isFavorite: true,
    },
    ]);

    
    const [selectedContact, setSelectedContact] = useState(undefined);
    const [isUpdating, setIsUpdating] = useState(false);

    const handleAddContact = (newContact) => {
        alert ("jjj");
    };

    return (
        <div>
            <Header/>
            <div className="container" style={{minHeight:"85vh"}}>
                <div className="row py-3">
                    <div className="col-4 offset-2">
                        <AddRandomContact/>
                    </div>
                    <div className="col-4">
                        <RemoveAllContacts/>
                    </div>
                      <div className="row py-2">
                      <div className="col-8 offset-2">
                        <AddContact   
                        handleAddContact={handleAddContact}
                         />
                        </div>
                    </div>
                      <div className="row py-2">
                      <div className="col-8 offset-2">
                       <FavoriteContacts contacts={contactList.filter((u) => u.isFavorite === true)}/>
                        </div>
                    </div>
                      <div className="row py-2">
                      <div className="col-8 offset-2">
                        <GeneralContacts contacts={contactList.filter((u) => u.isFavorite === false)}/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};
export default ContactIndex;