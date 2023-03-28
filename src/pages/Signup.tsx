import { EmailInput, Password, TextInput } from "../components/input"
import { Link } from "react-router-dom"
import PageContainer from "../components/PageElements/PageContainer"
import { FormStyle } from "./Login"
import { useState } from "react"
import Button from "../components/Button"

const Signup = () => {
    const [data, setData] = useState({
        firstname: null,
        lastname: null,
        email: null,
        username: null,
        password: null,
        repassword: null,
    })

    const HandleChange = (name, value) => {
        console.log(name);

        setData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const HandleSubmit = () => {
        console.log('data', data)
    }

    return <PageContainer>
        <FormStyle height="670px">
            <div className="box" >
                <div className="form">
                    <div className="title">
                        Бүртгүүлэх
                    </div>
                    <div className="formElements">
                        <div className="inputBox">
                            <TextInput
                                Value={data.lastname}
                                name='lastname'
                                label="Овог нэр"
                                Handler={HandleChange}
                                color="darker"
                            />
                            <TextInput
                                Value={data.firstname}
                                name='firstname'
                                label="Нэр"
                                Handler={HandleChange}
                                color="darker"
                            />
                            <EmailInput
                                Value={data.email}
                                name='email'
                                label="И-мэйл хаяг"
                                Handler={HandleChange}
                                color="darker"
                            />
                            <Password
                                Value={data.password}
                                name='password'
                                label="Нууц үг"
                                Handler={HandleChange}
                                color="darker"
                            />
                            <Password
                                Value={data.repassword}
                                name='repassword'
                                label="Нууц үг дахин оруулах"
                                Handler={HandleChange}
                                color="darker"
                            />
                        </div>
                        <div className="links">
                            <div />
                            <Link to='/login' className="linkTag">
                                <div className="link bold">
                                    Нэвтрэх
                                </div>
                            </Link>
                        </div>
                        <div className="buttonContainer">
                            <Button
                                label="Бүртгүүлэх"
                                Handler={HandleSubmit}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </FormStyle>
    </PageContainer>
}

export default Signup