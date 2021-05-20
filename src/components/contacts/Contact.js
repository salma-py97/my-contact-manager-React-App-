import {FaTimes} from 'react-icons/fa'
import {FaAngleDown} from 'react-icons/fa'
import {FaPencilAlt} from 'react-icons/fa'

import {Link} from 'react-router-dom'

import PropTypes from 'prop-types'

import {useContext} from 'react'

import ContactContext from '../context/contactContext'




const Contact = ({contact}) => {
    
    // initialize ContactContext with contactContext (Mind the Casing)
    const contactContext = useContext(ContactContext);
    
    // destruction githubContext
    const {deleteContact, toggleContactInfo} = contactContext; 

    const {id, name, email, phone, showInfo} = contact;


    return (
        <div>
            <div className="card card-body mb-3 mx-auto" >
                <div className="d-flex align-items-center">

                    <h4 className="d-flex align-items-center">{name} <FaAngleDown className="text-secondary ms-2 mt-2" style={{cursor:'pointer', fontSize: "30px"}} onClick={() => toggleContactInfo(id)} />
                    </h4>
                    <div className="ms-auto">
                        <Link to={`/contact/edit/${id}`} >
                            <FaPencilAlt className="text-dark me-3" style={{cursor:'pointer', fontSize: "25px"}} />
                        </Link>
                        <FaTimes className="text-danger" style={{cursor:'pointer', fontSize: "25px"}} onClick={() => deleteContact(id)} />

                    </div>

                </div>
                
                {showInfo ?
                    <div className="card card-body">
                        <h5>Email: {email}</h5>
                        <h5>Phone: {phone}</h5>
                    </div>
                :
                null
                }
            </div>
        </div>
    )
}

// Contact.propTypes = {
//     name: PropTypes.string.isRequired,
//     phone: PropTypes.string.isRequired,
//     email: PropTypes.string.isRequired,
//     showInfo: PropTypes.bool.isRequired,
// }

export default Contact
