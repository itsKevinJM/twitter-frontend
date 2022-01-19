import React from 'react';
import { useContext } from "react"
import styled from 'styled-components'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'


import { UserContext } from "../../contexts/User"

const Button = styled.button`
{
    background-color: white;
    border: 2px solid  rgb(29, 155, 240);
    border-radius: 50px;
    color: rgb(29, 155, 240);
    font-weight: bold;
    font-size: 0.7em;
    font-size: 14px;
    padding: 0.6em 17.8em;
    cursor: pointer;
    margin-top: 10px
}
`

const CreateUserForm = () => {
    const { signup } = useContext(UserContext)
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName:"",
            password: "",
            email: "",
            // sexe: "",
            bio: "",
            birthday: Date,
            // language: "",
            // country:"",
            // tel: ""
        },
        onSubmit: values => {
          signup(values)
        },
        // validateOnChange: false,
        // validationSchema: Yup.object({
        //   firstName: Yup.string()
        //     .required("le prénom est requis")
        //     .min(1, "Password is too short"),
        //   password: Yup.string()
        //     .required("Password is required")
        //     .min(4, "Password is too short"),
        //   email: Yup.string()
        //     .required("Email is required")
        //     .email("Email invalid"),
        //   sexe: Yup.string()
        //     .required("Age is required")
        // })
    })


    return (
        <div>
            <form className='mt-3' onSubmit={formik.handleSubmit}> 
                <div className="mb-3">
                    <input 
                    type="text" 
                    className="form-control"  
                    placeholder='Prénom' 
                    name="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    />
                </div>

                <div className="mb-3">
                    <input 
                    type="text" 
                    className="form-control"  
                    placeholder='Nom'
                    name="lastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange} 
                    />
                </div>

                <div className="mb-3">
                    <input 
                    type="date" 
                    className="form-control" 
                    placeholder='Date de naissance'
                    name="birthday"
                    value={formik.values.birthday}
                    onChange={formik.handleChange} 
                    />
                </div>

                {/* <div className='mb-3'>
                    <select className="form-select" aria-label="Default select example" placeholder='sexe'>
                        <option 
                            type="text"  
                            name="sexe"
                            value={formik.values.sexe}
                            onChange={formik.handleChange}>Homme
                        </option>
                        <option 
                            type="string"
                            name="sexe"
                            value={formik.values.sexe}
                            onChange={formik.handleChange}>Femme
                        </option>
                    </select>
                </div> */}
                
                {/* <div className='mb-3 pd-flag-select pd-flag-primary'>
                    <select className="pd-countries"  ></select>
                </div>

                <div className='mb-3 pd-flag-select pd-flag-primary'>
                    <select className="pd-countries"  ></select>
                </div> */}

                <div className="mb-3">
                    <input 
                    type="text"
                    className="form-control"  
                    placeholder='Bio' 
                    name="bio"
                    value={formik.values.bio}
                    onChange={formik.handleChange}
                    />
                </div>

                <div className="mb-3">
                    <input 
                    type="email" 
                    className="form-control"  
                    placeholder='Email'
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange} 
                    />
                </div>

                <div className="mb-3">
                    <input 
                    type="password" 
                    className="form-control"  
                    placeholder='Mot de passe'
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    />
                </div>

                <Button type="submit">S'inscrire</Button>
            </form>

            
        </div>
    );
};

export default CreateUserForm;