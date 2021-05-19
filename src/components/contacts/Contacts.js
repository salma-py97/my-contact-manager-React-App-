import {useContext} from 'react'
import ContactContext from '../context/contactContext'
import Contact from './Contact'

const Contacts = ({onToggle}) => {
    // initialize ContactContext with contactContext (Mind the Casing)
    const contactContext = useContext(ContactContext);
    
    // destruction githubContext
    const {contacts} = contactContext;
    
    return (
        <div>
            <h1 className="mb-4 display-6" style={{fontWeight: "500"}}><span className="text-danger">Contact</span> List</h1>
            {contacts.map(contact => (
                <Contact key={contact.id} contact={contact} onToggle={onToggle}  />
            ))}
        </div>
    )
}

export default Contacts
