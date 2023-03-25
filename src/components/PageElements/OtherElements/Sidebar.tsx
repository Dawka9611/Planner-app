import styled from 'styled-components'
import { sizes } from '../../../utilities/style/Variables'

const Sidebar =()=>{
    return <SidebarStyle>
       Sidebar
    </SidebarStyle>
}

export default Sidebar

const SidebarStyle = styled.div`
    width: ${sizes.sidebarSize};
    height: 100%;
    min-height: 100vh;
    background-color: ${p => p.theme.mainColorDark};
    color: ${p => p.theme.textColor}
`