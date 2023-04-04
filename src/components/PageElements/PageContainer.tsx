import Navigation from "./Navigation"
import Topbar from "./Topbar"
import styled from 'styled-components'
import { useContext } from "react"
import UserContext from "../../utilities/context/UserContext"
import { sizes } from "../../utilities/style/Variables"
import useWindowDimensions from "../../utilities/hooks/windowDimensions"
import BurgerSidebar from "../BurgerSidebar"
import Sidebar from "./Sidebar"

type Props = {
    children: JSX.Element
}

const PageContainer = ({ children }: Props) => {
    const { user } = useContext(UserContext)
    const { mobileWidth } = useWindowDimensions()

    return <PageContainerStyle>
        {user?.token ? <div className="sidebar">
            {mobileWidth
                ? <BurgerSidebar />
                : <Sidebar />
            }
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
    min-height: 100vh;
    max-height: fit-content;
    background-color: ${p => p.theme.mainColorDark};
    color: ${p => p.theme.textColor};
    position: relative;
    .sidebar{
        position: sticky;
        top: 0;
        left: 0;
    }

    .rightSector{
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        /* justify-content: center; */
        align-items: center;
        min-height: 100vh;
        max-height: fit-content;
        position: relative;
        box-sizing: border-box;

        .mainSector{
            min-width: min(100%, 1500px);
            min-height: calc(100vh - 70px);
            max-height: fit-content;
            padding: ${sizes.spaceLarge};
            border: 1px solid white;
            box-sizing: border-box;
            display: flex;
            justify-content: center;
        }
    }

`