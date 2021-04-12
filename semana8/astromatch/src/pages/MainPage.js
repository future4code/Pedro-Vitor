import React, {useState, useEffect} from "react"
import axios from "axios"

export function MainPage() {
    const [person, setPerson] = useState({})

    const getPerson = async () => {
        try {
            const res = await axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/pedro-vitor/person")
            setPerson(res.data.profile)
        } catch (error) {
            console.log(error)
        }
    }

    const choosePerson = async (personId, personChoice) => {
        const body = {
            id: personId,
            choice: personChoice,
        }
        try {
            await axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/pedro-vitor/choose-person", body)
            getPerson()
            console.log(body)
        } catch (error) {
            console.log(error)
        }
    }

    const clearMatches = async () => {
        try{
            await axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/pedro-vitor/clear")
            getPerson()
        } catch (error){
            console.log(error)
        }
    }

    useEffect(() => {
        getPerson()
    }, [])

    return (
        <div>
            <img src={person.photo}/>
            <h3> {person.name} </h3>
            <p> {person.bio} </p>
            <button onClick={() => choosePerson(person.id, true)}>Yes</button>
            <button onClick={() => choosePerson(person.id, false)}> No</button>
            <button onClick={clearMatches}> Clear all matches</button>
        </div>
    )
}