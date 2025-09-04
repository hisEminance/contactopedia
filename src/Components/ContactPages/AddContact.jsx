import React, { useState, useEffect } from "react";
import Input from "../Input";
import Notification from "../Notification";

const AddContact = ({
  handleAddContact,
  handleUpdateContact,
  cancelUpdateContact,
  isUpdating,
  selectedContact
}) => {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    setForm({
      name: selectedContact?.name ?? "",
      email: selectedContact?.email ?? "",
      phone: selectedContact?.phone ?? ""
    });
  }, [selectedContact]);

  const handleChange = (field) => (e) => {
    const value = e.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleResponse = (response, { clearForm = false } = {}) => {
    if (response && response.status === "success") {
      setNotification({ type: "success", msg: response.msg || "Success" });
      if (clearForm) setForm({ name: "", email: "", phone: "" });
    } else {
      setNotification({ type: "error", msg: (response && response.msg) || "Operation failed" });
    }
    setTimeout(() => setNotification(null), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = form.name.trim();
    const email = form.email.trim();
    const phone = form.phone.trim();

    if (!name || !email || !phone) {
      setNotification({ type: "error", msg: "All fields are required!" });
      return;
    }

    if (isUpdating) {
      const response = handleUpdateContact({
        id: selectedContact?.id,
        name,
        email,
        phone,
      });
      handleResponse(response);
    } else {
      const response = handleAddContact({
        name,
        email,
        phone,
      });
      handleResponse(response, { clearForm: true });
    }
  };

  return (
    <div className="border col-12 text-white p-2">
      <form onSubmit={handleSubmit}>
        <div className="row p-2">
          <div className="col-12 text-white-50">
            {isUpdating ? "Update Contact" : "Add a new Contact"}
          </div>

          <Input id="contact-name" name="name" placeholder="Name..." value={form.name} onChange={handleChange("name")} />
          <Input id="contact-email" name="email" placeholder="Email..." value={form.email} onChange={handleChange("email")} />
          <Input id="contact-phone" name="phone" placeholder="Phone..." value={form.phone} onChange={handleChange("phone")} />

          {notification && <Notification notification={notification} />}

          <div className="col-12 col-md-4 p-1">
            <button type="submit" className="btn btn-primary btn-sm form-control">
              {isUpdating ? "Update" : "Create"}
            </button>
          </div>

          {isUpdating && (
            <div className="col-12 col-md-4 p-1">
              <button type="button" onClick={cancelUpdateContact} className="btn btn-secondary btn-sm form-control">
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