import React from "react"
import {useHistory} from "react-router-dom"

const HomePage = () => {
    const history = useHistory()

    const goToListTripsPage = () => {
        history.push("/trips/list")
    }

    const goToAdminHomePage = () => {
        history.push("/admin/trips/list")
    }

    return (
        <div>
            <h1> Para onde você está indo?</h1>
            <button onClick={goToListTripsPage}> Lista de Viagens</button>
            <button onClick={goToAdminHomePage}> Área do Adm</button>
        </div>
    )
}

export default HomePage