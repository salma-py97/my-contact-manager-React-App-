import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Contacts from './components/contacts/Contacts'
import AddContact from './components/contacts/AddContact'
// import EditContact from './components/contacts/EditContact'
import NotFound from './components/pages/NotFound'
import About from './components/pages/About'


import Navbar from './components/layout/Navbar'


import ContactState from './components/context/ContactState'

const App = () => {

  const [showAddForm, setShowAddForm] = useState(false)

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

            <Switch>

              {/* <Route exact path="/contact/edit/:id" component={EditContact} /> */}
              <Route exact path="/" component={Contacts} />
              <Route exact path="/about" component={About} /> 

              <Route component={NotFound} />

            </Switch>
            
          </div>
        </div>
      </Router>
    </ContactState>
  );
}

export default App;
