import React, {useMemo, useState} from "react"
import {useForm} from "react-hook-form"
import Select from 'react-select'
import {useHistory} from "react-router-dom"
import countryList from 'react-select-country-list'

const ApplicationFormPage = () => {
    const [value, setValue] = useState('')
    const {register, handleSubmit} = useForm()
    const options = useMemo(() => countryList().getData(), [])
    const history = useHistory()

    const onSubmit = () => {
        alert("Você se candidatou a uma vaga com sucesso !")
    }

    const goBack = () => {
        history.push("/trips/list")
    }

    const changeHandler = value => {
        setValue(value)
    }

    return (
        <div>
            <h3>Inscreva-se para uma viagem</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <select>
                    <option value="viagem1"> Viagem 1</option>
                    <option value="viagem2"> Viagem 2</option>
                    <option value="viagem3"> Viagem 3</option>
                    <option value="viagem4"> Viagem 4</option>
                    <option value="viagem4"> Viagem 5</option>
                </select>

                <input type="text" placeholder="Nome" {...register(
                    "name", {required: true})}/>

                <input type="number" placeholder="Idade" {...register(
                    "age", {required: true})}/>

                <input type="text" placeholder="Texto da Candidatura" {...register(
                    "applicationText", {required: true})}/>

                <input type="text" placeholder="Profissão" {...register(
                    "profession", {required: true})}/>

                <Select options={options}
                        onChange={changeHandler}
                        value={value}/>

                <input onClick={onSubmit} type="submit"/>
                <button onClick={goBack}> Voltar</button>
            </form>
        </div>
    )
}

export default ApplicationFormPage