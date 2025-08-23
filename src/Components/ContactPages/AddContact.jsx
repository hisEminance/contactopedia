import React, { useState } from "react";


const AddContact = ({ handleAddContact }) => {
     const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [lastMessage, setLastMessage] = useState("");

 const handleAddContactFormSubmit= (e) => {
    e.preventDefault();
    
  handleAddContact({ name, email, phone, id: Date.now(), isFavorite: false });
  };


    return (
        <div className="border col-12 text-white p-2">
            <form onSubmit={handleAddContactFormSubmit}>
            <div className="row p-2">
            <div className="col-12 text-white-50">Add a new Contact</div>
            <div className="col-12 col-md-4 p-1">
                <input 
                className="form-control form-control-sm" 
                placeholder="Name..." 
                value={name}
                onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="col-12 col-md-4 p-1">
                <input 
                className="form-control form-control-sm" 
                placeholder="Email.."
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                />
            </div>
            <div className="col-12 col-md-4 p-1">
                <input 
                className="form-control form-control-sm" 
                placeholder="Phone..." 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                />
            </div>
            <div className="col-12 col-md-4 p-1">
                <button className="btn btn-primary btn-sm form-control" >Create</button>
            </div>
           </div>
           </form>
        </div>
    );
};
export default AddContact;