import PageContainer from "../components/PageElements/MainElements/PageContainer"
import styled from 'styled-components'
import { sizes } from "../utilities/style/Variables"

const Login = () => {
    return <PageContainer>
        <FromStyle>
            <div className="box" >
                <div className="form">
                    <div className="title">
                        Нэвтрэх
                    </div>
                    <div className="inputBox">

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
    min-height: 100%;
    width: 100%;
    .box{
        width: 380px;
        height: 420px;
        position: relative;
        background-color: ${p => p.theme.mainColorDark};
        overflow: hidden;
        border-radius:  8px;
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
            width: 380px;
            height: 420px;
            position: absolute;
            background: linear-gradient(0deg, transparent, ${p=> p.theme.syan}, ${p=> p.theme.syan}); 
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
            background-color: ${p => p.theme.mainColorDark};
            border-radius: 8px;
            color: ${p=> p.theme.syan};
            padding: ${sizes.spaceLarger};

            .title{
                font-size: ${sizes.fontSizeLargest};
                text-align: center;
                padding: ${sizes.spaceLarger};
                font-weight: ${sizes.fontWeightBolder};
            }
            .inputBox{

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