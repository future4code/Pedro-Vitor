import React, {useEffect, useState} from "react"
import axios from "axios"
import {useProtectedPage} from "../hooks/useProtectedPage";
import {BASE_URL} from "../constants/urls";
import {useHistory} from "react-router-dom";

const TripDetailsPage = () => {
    useProtectedPage()
    const history = useHistory()
    const [trips, setTrips] = useState([])

    useEffect(() => {
        tripDetails()
    }, [])

    const goBack = () => {
        history.push("/admin/trips/list")
    }

    const getTrips = async () => {
        try {
            const result = await axios.get(`${BASE_URL}/trips`)
            setTrips(result.data.trips)
        } catch (error) {
            console.log(error)
        }
    }

    const deleteTrip = async (id) => {
        try {
            await axios.delete(`${BASE_URL}/trips/${id}`)
            console.log(id.data)
        } catch (error) {
            console.log(error)
        }
    }

    const tripDetails = (id) => {
        const token = window.localStorage.getItem("token")
        axios.get(`${BASE_URL}/trips/${id}`, {
            headers: {
                auth: token
            }
        }).then(r => {
            console.log(r)
            setTrips(r.data.trips)
        })
            .catch(error => {
                console.log(error)
            })
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
                <button onClick={deleteTrip}> Deletar</button>
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

export default TripDetailsPage