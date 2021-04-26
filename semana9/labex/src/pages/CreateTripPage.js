import React from "react"
import {useForm} from "react-hook-form";
import Select from "react-select"
import {useHistory} from "react-router-dom";
import {useProtectedPage} from "../hooks/useProtectedPage"

const CreateTripPage = () => {
    useProtectedPage()

    const history = useHistory()
    const {register, handleSubmit} = useForm()
    const options = [
        {value: "mercury", label: "Mercúrio"},
        {value: "venus", label: "Vênus"},
        {value: "earth", label: "Terra"},
        {value: "mars", label: "Marte"},
        {value: "jupiter", label: "Júpiter"},
        {value: "saturn", label: "Saturno"},
        {value: "uranus", label: "Urano"},
        {value: "neptune", label: "Netuno"}
    ]

    const onSubmit = () => {
        alert("Trip criada com sucesso !")
    }

    const goBack = () => {
        history.push("/admin/trips/list")
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Nome" {...register(
                    "name", {required: true})}/>
                <Select options={options}/>
                <input type="date" {...register("date", {required: true})}/>
                <input type="text" placeholder="Descrição"{...register("description", {required: true})}/>
                <input type="number" placeholder="Duração"{...register("duration", {required: true})}/>
                <input type="Submit" placeholder="Enviar"/>

                <button onClick={goBack}> Voltar</button>
            </form>
        </div>
    )
}

export default CreateTripPage