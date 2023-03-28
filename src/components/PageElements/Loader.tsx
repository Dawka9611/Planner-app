import styled from "styled-components"

export const LoaderCircle = () => {
    return (
        <MainLoadStyle >
            <img src="src/assets/loading.gif" alt="loader" />
            <div />
        </MainLoadStyle>
    )
}

const MainLoadStyle = styled.div`
    position:fixed;
    z-index:10000;
    top:0;
    left:30%;
    width:100vw;
    height:100vh;
    background-color:rgba(255,255,255,0.3);
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-around;
    img{
        width:105px;
        height:105px;
        margin-top:-12rem;
    }
    .ant-spin{
        margin-top:-12rem;
        .ant-spin-dot{
            font-size: 37px;
            .ant-spin-dot-item{
                width: 15.5px;
                height: 15.5px;
            }
        }
    }
`
