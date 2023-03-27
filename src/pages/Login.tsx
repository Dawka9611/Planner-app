import PageContainer from "../components/PageElements/MainElements/PageContainer"
import styled from 'styled-components'
import { sizes } from "../utilities/style/Variables"
import { DateInput, Password, Textarea, TextInput, TimeInput } from "../components/input"
import { useState } from 'react'
import Button from "../components/Button"
import { Link } from "react-router-dom"

const Login = () => {
    const [data, setData] = useState({
        username: null,
        password: null
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
        <FromStyle>
            <div className="box" >
                <div className="form">
                    <div className="title">
                        Нэвтрэх
                    </div>
                    <div className="formElements">
                        <div className="inputBox">
                            <TextInput
                                Value={data.username}
                                name='username'
                                label="username"
                                Handler={HandleChange}
                                color="darker"
                            />
                            <Password
                                Value={data.password}
                                name='password'
                                label="password"
                                Handler={HandleChange}
                                color="darker"
                            />
                        </div>
                        <div className="links">
                            <div className="link">
                                Нууц үг мартсан
                            </div>
                            <Link to='/signup'>
                                <div className="link bold">
                                    Бүртгүүлэх
                                </div>
                            </Link>
                        </div>
                        <div className="buttonContainer">
                            <Button
                                label="Нэвтрэх"
                                Handler={HandleSubmit}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </FromStyle>
    </PageContainer>

}

export default Login

export const FromStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: box-border;
    width: 100%;
    height: 100%;

    .box{
        min-width: min(100%, 380px);
        height: 420px;
        position: relative;
        background-color: ${p => p.theme.mainColorDarker};
        overflow: hidden;
        border-radius: 8px;
        &::before{
            content: "";
            width: 380px;
            height: 420px;
            position: absolute;
            background: linear-gradient(0deg, transparent, rgb(15, 156, 161), rgb(15, 156, 161)); 
            top: -50%;
            left: -50%;
            transform-origin: bottom right;
            animation: animate 6s linear infinite;
        }
        &::after{
            content: "";
            min-width: min(100%, 380px);
            height: 420px;
            position: absolute;
            background: linear-gradient(0deg, transparent, ${p => p.theme.syan}, ${p => p.theme.syan}); 
            top: -50%;
            left: -50%;
            transform-origin: bottom right;
            animation: animate 6s linear infinite;
            animation-delay: -3s;
        }
        .form{
            position: absolute;
            z-index: 10;
            inset: 2px;
            background-color: ${p => p.theme.mainColorDarker};
            border-radius: 8px;
            color: ${p => p.theme.syan};
            padding: ${sizes.spaceLarge};

            .title{
                font-size: ${sizes.fontSizeLargest};
                text-align: center;
                padding: ${sizes.spaceLarger} ${sizes.spaceLarge};
                font-weight: ${sizes.fontWeightBold};
            }
           .formElements{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                row-gap: ${sizes.spaceMedium};
                margin-top: ${sizes.spaceMedium};

                .inputBox{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    row-gap: ${sizes.spaceMedium};
                    width: 100%;
                }
                .links{
                    display: flex;
                    justify-content: space-between;
                    column-gap: ${sizes.spaceMedium};
                    min-width: min(100%, 300px);
                    font-size: ${sizes.fontSizeSmall};
                    .link{
                        text-decoration: underline;
                        &:hover{
                            cursor: pointer;
                        }
                    }
                    .bold{
                        font-weight: ${sizes.fontWeightBold};
                        color: ${p => p.theme.textColorHover}
                    }
                }
                .buttonContainer{
                    text-align: center;
                    padding: ${sizes.spaceLarge} 0;
                }
           }
        }
    }
    @keyframes animate {
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
`