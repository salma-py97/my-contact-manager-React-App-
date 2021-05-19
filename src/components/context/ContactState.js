// initial state & actions

import React, {useReducer, useEffect} from 'react';

import ContactContext from './contactContext'
import ContactReducer from './contactReducer'


// import types
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    // TOGGLE_FORM,
    TOGGLE_CONTACT_INFO,
    // FETCH_CONTACTS,
    GET_CONTACTS
} from './types'

const ContactState = props => {
    const initialState = {
        contacts: [],
    }

    const [state, dispatch] = useReducer(ContactReducer, initialState)

 // ACTIONS
    // useEffect
    useEffect(() => {
        const getContacts = async () => {
        const contactsFromServer = await fetchContacts();
        dispatch({type: GET_CONTACTS, payload: contactsFromServer})
        // setContacts(contactsFromServer)
        }
        getContacts();
    }, [])

    // Fetch Contacts from Server
    const fetchContacts = async () => {
        const res = await fetch("http://localhost:5000/contacts");
        const data = await res.json();
        return data
    }



    // Add Contact
    const addContact = async (contact) => {

        const res = await fetch("http://localhost:5000/contacts",
        {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(contact)
        });

        const data = await res.json()

        // setContacts([...contacts, data])
        dispatch({type: ADD_CONTACT, payload: data})
    }
    
    // Delete Contact
    const deleteContact = async (id) => {
        await fetch (`http://localhost:5000/contacts/${id}`,
        {
        method: 'DELETE'
        })

        // setContacts(contacts.filter(contact => 
        // contact.id !== id
        // ))

        dispatch({type: DELETE_CONTACT, payload: id})
    }

    // Toggle Contact Info
    const toggleContactInfo = (id) => {
        // setContacts(contacts.map(contact => 
        // contact.id === id ? {...contact, showInfo: !contact.showInfo} : contact
        // ))

        dispatch({type: TOGGLE_CONTACT_INFO, payload: id})
    }

    // // Toggle Form
    // const toggleForm = () => {
    //     setShowAddForm(!showAddForm);
    //     // console.log(showAddForm)
    // }

 // END : ACTIONS 



    return (
        <ContactContext.Provider value={{
            contacts: state.contacts,
            contact: state.contact,
            // getContacts,
            fetchContacts,
            addContact,
            deleteContact,
            toggleContactInfo,
            }}>

            {props.children}

        </ContactContext.Provider>
    )
}

export default ContactState
