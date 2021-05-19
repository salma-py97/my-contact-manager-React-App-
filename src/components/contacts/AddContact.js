import {useState, useContext} from 'react'
import {FaTimes} from 'react-icons/fa'

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
        
    }


    return (
        <div className="card card-body mb-5">
            
        <FaTimes className="text-danger ms-auto" style={{cursor:'pointer', fontSize: "20px"}} onClick={onToggle} />

            <form className="fs-5" onSubmit={onSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name</label>

                    <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} value={name} />

                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} value={email}/>

                </div>
                <div className="mb-3">
                    <label className="form-label">Phone Number</label>
                    <input type="number" className="form-control" onChange={(e) => setPhone(e.target.value)} value={phone}/>
                </div>
                {/* <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" />
                    <label className="form-check-label">Check me out</label>
                </div> */}
                <div className="d-grid">
                    <button type="submit" className="btn btn-secondary btn-block btn-lg">Save Contact</button>

                </div>
            </form>
        </div>
    )
}

export default AddContact
