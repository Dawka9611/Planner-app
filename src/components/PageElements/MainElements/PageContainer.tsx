import Navigation from "./Navigation"
import Topbar from "./Topbar"
import styled from 'styled-components'
import { useContext } from "react"
import UserContext from "../../../utilities/context/UserContext"
import { sizes } from "../../../utilities/style/Variables"

type Props = {
    children: JSX.Element
}

const PageContainer = ({ children }: Props) => {
    const { user } = useContext(UserContext)

    return <PageContainerStyle>
        {user?.token ? <div className="sidebar">
            <Navigation />
        </div>
            : ""}
        <div className="rightSector">
            <Topbar />
            <div className="mainSector">
                {children}
            </div>
        </div>
    </PageContainerStyle>
}

export default PageContainer

const PageContainerStyle = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-color: ${p => p.theme.mainColorLighter};
    color: ${p => p.theme.textColor};
    .rightSector{
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        /* justify-content: center; */
        align-items: center;
        .mainSector{
            min-width: min(100%, 1500px);
            min-height: calc(100vh - 70px);
            border: ${p => p.theme.borderLighter};
        }
    }

`