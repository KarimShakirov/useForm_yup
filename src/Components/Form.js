import React from 'react';
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import {schema} from "./Validations/FormAuth";

const Form = () => {
    const {
        register,
        handleSubmit,
        formState: {
            errors,
            isValid
        },
        reset
    } = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema) //преобразовыватель
    })

    const onSubmit = (data) => {
        console.log(data)
        reset()
    }



    return (
        <div className="Form">
            <h1>Form Validation</h1>
            <div className="inputs">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <p>{errors?.firstName?.message}</p>
                    <input name="firstName" {...register('firstName')} placeholder="Name..."/>
                    <p>{errors?.lastName?.message}</p>
                    <input name="lastName" {...register('lastName')} placeholder="Last Name..."/>
                    <p>{errors?.email?.message}</p>
                    <input name="email" {...register('email')} placeholder="Email..."/>
                    <p>{errors?.age?.message}</p>
                    <input name="age" {...register('age')} placeholder="Age..."/>
                    <p>{errors?.password?.message}</p>
                    <input type="password" name="password" {...register('password')} placeholder="Password..."/>
                    <input
                        type="password"
                        name="confirmPassword"
                        {...register('confirmPassword')}
                        placeholder="Confirm password..."
                    />
                    <p>{errors?.confirmPassword?.message && "Passwords Should Match"}</p>
                    <input type="submit"/>
                </form>
            </div>
        </div>
    );
};

export default Form;