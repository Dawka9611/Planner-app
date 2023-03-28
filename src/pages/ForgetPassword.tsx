import PageContainer from "../components/PageElements/PageContainer"
import styled from 'styled-components'
import { sizes } from "../utilities/style/Variables"
import { DateInput, EmailInput, Password, Textarea, TextInput, TimeInput } from "../components/input"
import { useState } from 'react'
import Button from "../components/Button"
import { Link } from "react-router-dom"
import { FormStyle } from "./Login"

const ForgotPassword = () => {
    const [data, setData] = useState({
       email: null
    })

    const HandleChange = (name, value) => {
        setData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const HandleSubmit = () => {
        console.log('data', data)
    }

    return <PageContainer>
        <FormStyle height="350px">
            <div className="box" >
                <div className="form">
                    <div className="title">
                        Нууц үг сэргээх
                    </div>
                    <div className="formElements">
                        <div className="inputBox">
                            <EmailInput
                                Value={data.email}
                                name='email'
                                label="И-мэйл хаяг"
                                Handler={HandleChange}
                                color="darker"
                            />
                        </div>
                        <div className="links">
                            <Link to='/signup' className="linkTag">
                                <div className="link bold">
                                    Бүртгүүлэх
                                </div>
                            </Link>
                            <Link to='/signup' className="linkTag">
                                <div className="link bold">
                                    Нэвтрэх
                                </div>
                            </Link>
                        </div>
                        <div className="buttonContainer">
                            <Button
                                label="Үргэлжлүүлэх"
                                Handler={HandleSubmit}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </FormStyle>
    </PageContainer>

}

export default ForgotPassword