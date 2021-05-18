
import Contact from './Contact'

const Contacts = ({contacts, onToggle, onDelete}) => {
    return (
        <div>
            {contacts.map(contact => (
                <Contact key={contact.id} contact={contact} onToggle={onToggle} onDelete={onDelete} />
            ))}
        </div>
    )
}

export default Contacts
