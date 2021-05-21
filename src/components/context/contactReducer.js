import {
    ADD_CONTACT,
    DELETE_CONTACT,
    // TOGGLE_FORM,
    TOGGLE_CONTACT_INFO,
    GET_CONTACTS,   
} from './types'

export default (state, action) => {
    switch (action.type) {
        case GET_CONTACTS:
            return {
                ...state,
                contacts: action.payload
            }

        case ADD_CONTACT:
            return {
                ...state,
                contacts: [action.payload, ...state.contacts]
            }
        case DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter(contact => 
                    contact.id !== action.payload)
            }
        case TOGGLE_CONTACT_INFO:
            return {
                ...state,
                contacts: state.contacts.map(contact => 
                    contact.id === action.payload ? {...contact, showInfo: !contact.showInfo} : contact
                    )
            }
        default :
            return state
    }
}