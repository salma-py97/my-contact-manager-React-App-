import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Contacts from './components/Contacts'
import AddContact from './components/AddContact'
// import Home from './components/pages/Home'
// import About from './components/pages/About'


import Navbar from './components/Navbar'


const App = () => {
  const [contacts, setContacts] = useState([
    {
      id: "1",
      name : "John Doe",
      email: "jdoe@gmail.com",
      phone: "555-555-5555",
      showInfo: false
  },
  {
      id: "2",
      name : "Karen Smith",
      email: "ksmith@gmail.com",
      phone: "333-333-3333",
      showInfo: false
  },
  {
      id: "3",
      name : "Sam Jones",
      email: "sjones@gmail.com",
      phone: "222-222-2222",
      showInfo: false
  }
  ])

  const [showAddForm, setShowAddForm] = useState(false)

  // ACTIONS

  // Add Contact
  const addContact = (contact) => {
    // create an id for the new Contact
    const id = Math.floor(Math.random() * 10000) + 1;

    const newContact = {id, ...contact};

    setContacts([...contacts, newContact])

  }
  
  // Delete Contact
  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => (
      contact.id !== id

      )))
      console.log('delete', id)
  }

  // Toggle Contact Info
  const toggleContactInfo = (id) => {
    setContacts(contacts.map(contact => 
      contact.id === id ? {...contact, showInfo: !contact.showInfo} : contact
    ))
  }

  // Toggle Form
  const toggleForm = () => {
    setShowAddForm(!showAddForm);
    // console.log(showAddForm)
  }


  // Edit Contact Info

  return (
    <Router>
      <div className="App">
        <Navbar onToggle={toggleForm} title="Contact Manager" icon="fas fa-list" showAdd={showAddForm} />


        <div className="container" style={{maxWidth: "600px"}}>
          {showAddForm && <AddContact onAdd={addContact} onToggle={toggleForm} />}
          

          <Contacts contacts={contacts} onToggle={toggleContactInfo} onDelete={deleteContact} />

        </div>


      </div>

    </Router>
  );
}

export default App;
