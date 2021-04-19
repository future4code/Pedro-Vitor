import React, {useState, useEffect} from "react"
import {useHistory} from "react-router-dom";
import {useProtectedPage} from "../hooks/useProtectedPage"
import axios from "axios";
import {BASE_URL} from "../constants/urls";

const AdminHomePage = () => {
    useProtectedPage()

    const [trips, setTrips] = useState([])
    const history = useHistory()

    const goToTripDetailsPage = () => {
        history.push("/admin/trips/:id")
    }

    const goToCreateTripPage = () => {
        history.push("/admin/trips/create")
    }

    const goBack = () => {
        history.push("/")
    }

    const logout = () => {
        window.localStorage.removeItem("token")
        history.push("/login")
    }

    const getTrips = async () => {
        try {
            const result = await axios.get(`${BASE_URL}/trips`)
            setTrips(result.data.trips)
        } catch (error) {
            console.log(error)
        }
    }

    const tripList = trips.map(t => {
        return (
            <div>
                <p> Nome: {t.name} </p>
                <button onClick={goToTripDetailsPage}> Detalhes</button>
            </div>
        )
    })

    useEffect(() => {
        getTrips()
    }, [])

    return (
        <div>
            <h1> Admin Home Page</h1>
            <button onClick={goBack}> Voltar</button>
            <button onClick={goToCreateTripPage}> Criar Viagem</button>
            <button onClick={logout}> Logout</button>
            {tripList}
        </div>
    )
}

export default AdminHomePage