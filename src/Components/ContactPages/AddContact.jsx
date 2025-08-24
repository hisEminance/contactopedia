import React, { useState, useEffect } from "react";

const AddContact = ({
  handleAddContact,
  handleUpdateContact,
  cancelUpdateContact,
  isUpdating,
  selectedContact
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [lastMessage, setLastMessage] = useState("");

  // Коли обирають контакт для редагування – заповнити форму
  useEffect(() => {
    if (isUpdating && selectedContact) {
      setName(selectedContact.name);
      setEmail(selectedContact.email);
      setPhone(selectedContact.phone);
    } else {
      setName("");
      setEmail("");
      setPhone("");
    }
  }, [isUpdating, selectedContact]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !phone.trim()) {
      setErrorMessage("All fields are required!");
      return;
    }

    if (isUpdating) {
      const response = handleUpdateContact({
        id: selectedContact.id,
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
      });

      if (response.status === "success") {
        setErrorMessage("");
        setLastMessage(response.msg);
      } else {
        setErrorMessage(response.msg);
      }
    } else {
      const response = handleAddContact({
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
      });

      if (response.status === "success") {
        setLastMessage(response.msg);
        setErrorMessage("");
        setName("");
        setEmail("");
        setPhone("");
      } else {
        setErrorMessage(response.msg);
      }
    }
  };

  return (
    <div className="border col-12 text-white p-2">
      <form onSubmit={handleSubmit}>
        <div className="row p-2">
          <div className="col-12 text-white-50">
            {isUpdating ? "Update Contact" : "Add a new Contact"}
          </div>

          <div className="col-12 col-md-4 p-1">
            <input
              className="form-control form-control-sm"
              placeholder="Name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
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

          {errorMessage && (
            <div className="col-12 text-center text-danger">{errorMessage}</div>
          )}

          {lastMessage && (
            <div className="col-12 text-center text-success">{lastMessage}</div>
          )}

          <div className="col-12 col-md-4 p-1">
            <button type="submit" className="btn btn-primary btn-sm form-control">
              {isUpdating ? "Update" : "Create"}
            </button>
          </div>

          {isUpdating && (
            <div className="col-12 col-md-4 p-1">
              <button
                type="button"
                onClick={cancelUpdateContact}
                className="btn btn-secondary btn-sm form-control"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddContact;
