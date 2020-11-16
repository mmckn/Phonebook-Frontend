import React, { useState, useEffect } from 'react'
import Form from './Components/Form'
import Search from './Components/Search'
import personsService from './services/personsService'
import Notification from './Components/Notification'
import './styles/App.css'

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [searchString, setNewSearch] = useState('')
    const [errorMessage, setErrorMessage] = useState(null)
    const [successMessage, setSuccessMessage] = useState(null)
    //this is the filtered version of our list if searchstring is empty it will display the whole person list.
    let searchResults = persons.filter(number => number.name.includes(searchString))

    const errorStyle = {
        color: 'red',
        background: 'lightgrey',
        fontsize: 20,
        borderstyle: 'solid',
        borderradius: 5,
        padding: 10,
        marginbottom: 10,
    }

    const successStyle = {
        color: 'green',
        background: 'lightgrey',
        fontsize: 20,
        borderstyle: 'solid',
        borderradius: 5,
        padding: 10,
        marginbottom: 10,
    }


    // set persons object with the information from our heroku server
    useEffect(() => {
        personsService
            .getAll()
            .then(initialPhoneRecords => {
                setPersons(initialPhoneRecords)
                console.log(initialPhoneRecords)

            })

    }, [])
   


    const addName = (event) => {
        //stops the whole page being reloaded on form submission
        event.preventDefault()
        const person = persons.find(number => number.name === newName)
        
        if (person) {

            const result = window.confirm(` Update ${newName}'s number? `)

            if (result) {
                //create a new person with old persons details and new number.
                const updatedPerson = { id:person.id, name: person.name, number: newNumber }
                personsService.update(person.id, updatedPerson)

                    //make a new list of persons replacing the old person with the update version
                    .then(updatedPerson => {
                        setPersons(persons.map(person => person.id === updatedPerson.id ?
                            updatedPerson : person
                        ))
                      
                    })
                    .then
                    .catch(error => {
                        setErrorMessage(`${updatedPerson.name} has been removed from the database`)
                        setTimeout(() => {
                            setSuccessMessage(null)
                        }, 5000)
                    })


                setSuccessMessage(`${updatedPerson.name}'s phonenumber has been update to ${updatedPerson.phoneNumber}`)
                setTimeout(() => {
                    setSuccessMessage(null)
                }, 5000)

                setNewNumber('')
                setNewName('')
            }

        }

        else {
            console.log('working')
            //update the persons database with new entrant details
            const newPerson = { name: newName, number: newNumber }
            personsService.create(newPerson)
                //update the persons list with the response from the server
                .then(returnedPerson => {
                    setPersons(persons.concat(returnedPerson))
                    setNewSearch('')
                    console.log(returnedPerson)


                }).catch(error => { console.log(error) })

            setSuccessMessage(`${newPerson.name} has been added to the database!`)
            setTimeout(() => {
                setSuccessMessage(null)
            }, 5000)

        }
    }

    const removeName = (event) => {
        //remove the person with the event(id) from the server

        const result = window.confirm('Are you sure you want to delete this user?')
        if (result) {
            personsService.remove(event)
                //filter out the deleted person from the persons list to update the app state and view
                .then(returnedPerson => setPersons(persons.filter(person => person.id !== event)))
                .catch(error => {
                    setErrorMessage(
                        'This person has already been removed'
                    )
                })

            setSuccessMessage(`Succesfully removed from the database!`)
            setTimeout(() => {
                setSuccessMessage(null)
            }, 5000)
        }

    }

    const handleNameChange = (event) => {
        //updates the newName state as user types name
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {

        setNewNumber(event.target.value)
    }

    const handleSearchChange = (event) => {
        console.log(event.target.value)
        setNewSearch(event.target.value)

    }


    return (

        <div id="homeImg" style={{margin:'0-auto'}}>
            <h1 className="title" >Phonebook</h1>

            <Notification message={errorMessage} styleType={errorStyle} />
            <Notification message={successMessage} styleType={successStyle} />

            <Form newName={newName} newNumber={newNumber} persons={persons}
                handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}
                addName={addName} />

            <Search searchString={searchString} handleSearchChange={handleSearchChange}
                persons={persons} searchResults={searchResults} remove={removeName} />

        </div>
    )
}
export default App