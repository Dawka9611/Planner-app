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
    background-color: ${p => p.theme.mainColorDarker};
    color: ${p => p.theme.textColor};
    height: 100%;
`