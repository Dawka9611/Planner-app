import FrontPage from 'pages/FrontPage'
import useWindowDimensions from '../../../utilities/hooks/windowDimensions'
// import useWindowDimensions from 'pages/windowDimensions'
import styled from 'styled-components'
import BurgerSidebar from '../OtherElements/BurgerSidebar'
import Sidebar from '../OtherElements/Sidebar'

const Navigation = () => {
    const { mobileWidth } = useWindowDimensions()
    return <NavigationStyle>
        {mobileWidth
            ? <BurgerSidebar />
            : <Sidebar />
        }
    </NavigationStyle>
}

export default Navigation

const NavigationStyle = styled.div`
`