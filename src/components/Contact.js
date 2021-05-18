import {FaTimes} from 'react-icons/fa'
import {FaAngleDown} from 'react-icons/fa'
import {FaPencilAlt} from 'react-icons/fa'

import PropTypes from 'prop-types'



const Contact = ({contact, onToggle, onDelete}) => {
    const {id, name, email, phone, showInfo} = contact;
    return (
        <div>
            <div className="card card-body mb-3 mx-auto" >
                <div className="d-flex align-items-center">

                    <h2>{name} <FaAngleDown className="text-secondary" style={{cursor:'pointer', fontSize: "30px"}} onClick={() => onToggle(id)} />
                    </h2>
                    <div className="ms-auto">
                        <FaPencilAlt className="text-dark me-3" style={{cursor:'pointer', fontSize: "30px"}} />
                        <FaTimes className="text-danger" style={{cursor:'pointer', fontSize: "30px"}} onClick={() => onDelete(id)} />

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
