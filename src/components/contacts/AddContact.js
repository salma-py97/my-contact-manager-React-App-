import {useState, useContext} from 'react'
import {FaTimes} from 'react-icons/fa'
import PropTypes from 'prop-types'



import FormInput from '../layout/FormInput'

import ContactContext from '../context/contactContext'


const AddContact = ({onToggle}) => {

    // initialize ContactContext with contactContext (Mind the Casing)
    const contactContext = useContext(ContactContext);

    // destruction githubContext
    const {addContact} = contactContext; 

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")


    // Action
    const onSubmit = (e) => {
        e.preventDefault();

        if (!name) {
            alert('Please Enter a valid Contact')
        } else {
            addContact({name, email, phone})
            onToggle()
        }

        // Clear Form after submit
        setName("")
        setPhone("")
        setEmail("")
        

        // props.history.push('/')
    }


    return (
        <div className="card card-body mb-5">
            
        <FaTimes className="text-danger ms-auto" style={{cursor:'pointer', fontSize: "20px"}} onClick={onToggle} />

            <form className="fs-5" onSubmit={onSubmit}>

                <FormInput label="Name" type="text" value={name} placeholder="Enter Name..." onChange={e => setName(e.target.value)} />
                <FormInput label="Email" type="email" value={email} placeholder="Enter Email..." onChange={e => setEmail(e.target.value)} />
                <FormInput label="Phone" type="number" value={phone} placeholder="Enter Phone Number..." onChange={e => setPhone(e.target.value)} />

                <div className="d-grid">
                    <button type="submit" className="btn btn-secondary btn-block btn-lg">Save Contact</button>

                </div>
            </form>
        </div>
    )
}

AddContact.propTypes = {
    onToggle: PropTypes.func,
}

export default AddContact
