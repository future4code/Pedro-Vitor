import React, {useState, useEffect} from "react"
import axios from "axios"
import {BASE_URL} from "../constants/urls"
import {useHistory} from "react-router-dom"

const ListTripsPage = () => {
    const history = useHistory()
    const [trips, setTrips] = useState([])

    const goToApplicationFormPage = () => {
        history.push("/trips/application")
    }

    const goBack = () => {
        history.push("/")
    }

    const getTrips = async () => {
        try {
            const result = await axios.get(`${BASE_URL}/trips`)
            setTrips(result.data.trips)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getTrips()
    }, [])

    const tripList = trips.map(t => {
        return (
            <div>
                <p> Nome: {t.name} </p>
                <p> Descrição: {t.description} </p>
                <p> Planeta: {t.planet}</p>
                <p> Duração: {t.durationInDays}</p>
                <p> Data: {t.date}</p>
                <button onClick={goToApplicationFormPage}> Aplicar</button>
            </div>
        )
    })

    return (
        <div>
            {tripList}
            <button onClick={goBack}> Voltar</button>
        </div>
    )
}

export default ListTripsPage