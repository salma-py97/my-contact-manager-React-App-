import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Contacts from './components/contacts/Contacts'
import AddContact from './components/contacts/AddContact'
// import Home from './components/pages/Home'
// import About from './components/pages/About'


import Navbar from './components/layout/Navbar'


import ContactState from './components/context/ContactState'

const App = () => {
  // const [contacts, setContacts] = useState([
  //   {
  //     id: "1",
  //     name : "John Doe",
  //     email: "jdoe@gmail.com",
  //     phone: "555-555-5555",
  //     showInfo: false
  // },
  // {
  //     id: "2",
  //     name : "Karen Smith",
  //     email: "ksmith@gmail.com",
  //     phone: "333-333-3333",
  //     showInfo: false
  // },
  // {
  //     id: "3",
  //     name : "Sam Jones",
  //     email: "sjones@gmail.com",
  //     phone: "222-222-2222",
  //     showInfo: false
  // }
  // ])

  const [showAddForm, setShowAddForm] = useState(false)

  // // useEffect
  // useEffect(() => {
  //   const getContacts = async () => {
  //     const contactsFromServer = await fetchContacts();
  //     setContacts(contactsFromServer)
  //   }
  //   getContacts();
  // }, [])

  // // ACTIONS
  // // Fetch Contacts from Server
  // const fetchContacts = async () => {
  //   const res = await fetch("http://localhost:5000/contacts");
  //   const data = await res.json();
  //   return data
  // }



  // // Add Contact
  // const addContact = async (contact) => {

  //   const res = await fetch("http://localhost:5000/contacts",
  //   {
  //     method: 'POST',
  //     headers: {
  //       'Content-type': 'application/json'
  //     },
  //     body: JSON.stringify(contact)
  //   });

  //   const data = await res.json()

  //   setContacts([...contacts, data])

  // }
  
  // // Delete Contact
  // const deleteContact = async (id) => {
  //   await fetch (`http://localhost:5000/contacts/${id}`,
  //   {
  //     method: 'DELETE'
  //   })

  //   setContacts(contacts.filter(contact => 
  //     contact.id !== id
  //     ))
  // }

  // // Toggle Contact Info
  // const toggleContactInfo = (id) => {
  //   setContacts(contacts.map(contact => 
  //     contact.id === id ? {...contact, showInfo: !contact.showInfo} : contact
  //   ))
  // }

  // Toggle Form
  const toggleForm = () => {
    setShowAddForm(!showAddForm);
    // console.log(showAddForm)
  }


  // Edit Contact Info

  return (
    <ContactState>
      <Router>
        <div className="App">
          <Navbar onToggle={toggleForm} title="Contact Manager" icon="fas fa-list" showAdd={showAddForm} />

          <div className="container" style={{maxWidth: "500px"}}>
            {showAddForm && <AddContact  onToggle={toggleForm} />}
            
            <Contacts />

          </div>
        </div>
      </Router>
    </ContactState>
  );
}

export default App;
