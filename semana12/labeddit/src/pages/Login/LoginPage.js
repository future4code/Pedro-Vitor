import React from "react"
import {useForm} from "react-hook-form"

const LoginPage = () => {
    const {register, handleSubmit, errors} = useForm()

    const onSubmit = (data) =>{
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text"
        </form>
    )
}

export default LoginPage