import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ContactList() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

    function fetchContacts() {
 axios.get('http://localhost:4000/Contact')
      .then(res => {
        setContacts(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.response?.data?.message || err.message);
        setLoading(false);
      });

    }
  useEffect(() => {
   fetchContacts();
  }, []);



  if (loading) return <p>Loading Contacts...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Contacts List</h2>
      <ul>
        {contacts.map(contact => (
          <li key={contact._id}>{contact.name} — {contact.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
