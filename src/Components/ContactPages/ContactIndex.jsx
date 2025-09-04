import Footer from "../Footer";
import Header from "../Header";
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

        const lastId = contactList.length > 0 
        ? contactList[contactList.length - 1].id : 0;

        if(newContact.name == "") {
            return {status: "failure", msg: "Please enter a valid name"}
        } else if(newContact.phone == "") {
            return {status: "failure", msg: "Please enter a valid phone"}
        } 


        const duplicateRecord = contactList.some(
         (c) => c.name === newContact.name && c.phone === newContact.phone
         );
          if (duplicateRecord>0) {
           return { status: false, msg: "Duplicate record" };
        }  else {
            const newFinalContact = {
            ...newContact, 
            id: lastId+1,
            isFavorite: false,
        }
        setContactList((prev) => [...prev, newFinalContact]);
        return {status:"success", msg: "Contact was created"}
        }
    
    };

    const handleToggleFavorite = (contact) => {
       setContactList((prev) =>
        prev.map((obj) => 
        obj.id === contact.id ? {...obj, isFavorite: !obj.isFavorite} : obj
        ) 
       );
    };

    const handleDeleteContact = (contactId) => {
      setContactList((prev) => prev.filter((obj) => obj.id !== contactId)
      );
    };

    const handleAddRandomContact = (newContact) => {
      const lastId = contactList.length > 0 ? contactList[contactList.length - 1].id : 0;
      const newFinalContact = {
            ...newContact, 
            id: lastId+1,
            isFavorite: false,
        }
        setContactList((prev) => [...prev, newFinalContact]);
        return {status:"success", msg: "Contact was created"}
    };
     
    const handleRemoveAllContact = () => {
       setContactList([]);
    };
    const handleCancelUpdateContact = () => {
    console.log(selectedContact);
    setSelectedContact(undefined);
    setIsUpdating(false);
};


const handleUpdateClick = (contact) => {
    console.log(contact);
    setSelectedContact(contact);
    setIsUpdating(true);
};


const handleUpdateContact = (updatedContact) => {
    console.log(updatedContact);

    if (updatedContact.name.trim() === "") {
        return { status: "failure", msg: "Please Enter a valid Name" };
    } else if (updatedContact.phone.trim() === "") {
        return { status: "failure", msg: "Please Enter a valid Phone Number" };
    }

    setContactList((prevList) =>
        prevList.map((obj) =>
            obj.id === updatedContact.id
                ? { ...obj, name: updatedContact.name, email: updatedContact.email, phone: updatedContact.phone }
                : obj
        )
    );

    setIsUpdating(false);
    setSelectedContact(undefined);

    return { status: "success", msg: "Contact was updated successfully" };
};


    return (
        <div>
            <Header/>
            <div className="container" style={{minHeight:"85vh"}}>
                <div className="row py-3">
                    <div className="col-4 offset-2 row" >
                        <AddRandomContact  handleAddRandomContact={handleAddRandomContact}/>
                    </div>
                    <div className="col-4 row">
                        <RemoveAllContacts handleRemoveAllContact ={handleRemoveAllContact}/>
                    </div>
                      <div className="row py-2">
                      <div className="col-8 offset-2">
                        <AddContact 
                        handleAddContact={handleAddContact}
                        cancelUpdateContact={handleCancelUpdateContact}
                        isUpdating={isUpdating}
                        selectedContact={selectedContact}
                        handleUpdateContact={handleUpdateContact}
                        />
                        </div>
                    </div>
                    <div className="row py-2">
                      <div className="col-8 offset-2">
                       <FavoriteContacts 
                       contacts={contactList.filter((u) => u.isFavorite === true)}
                       favoriteClick = {handleToggleFavorite} 
                       deleteContact = {handleDeleteContact}
                       updateClick={handleUpdateClick}
                       />
                       </div>
                    </div>
                    <div className="row py-2">
                      <div className="col-8 offset-2">
                        <GeneralContacts 
                        contacts={contactList.filter((u) => u.isFavorite === false)}
                        favoriteClick = {handleToggleFavorite}
                        deleteContact = {handleDeleteContact}
                        updateClick={handleUpdateClick}
                        />
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};
export default ContactIndex;