import { BsList } from 'react-icons/bs'
import styled from 'styled-components'
import { sizes } from '../utilities/style/Variables'
import { useState } from "react"
import Sidebar from './PageElements/Sidebar'
const BurgerSidebar = () => {
    const [showSidebar, setShowSidebar] = useState(false)

    const HandleSidebar = () => {
        setShowSidebar(prev => !prev)
    }

    return <BurgerSidebarStyle>
        <div className='burgerIcon' onClick={HandleSidebar}>
            <BsList />
        </div>
        {showSidebar
            ? <div className='sidebaModal'>
                <Sidebar/>
            </div>
            : ""
        }
    </BurgerSidebarStyle>
}

export default BurgerSidebar

const BurgerSidebarStyle = styled.div`
    background-color: ${p => p.theme.mainColorDarker};
    min-height: ${sizes.topbarHeightMobile};
    display: flex;
    /* align-items: center; */
    justify-content: center;
    flex-direction: column;
    .burgerIcon{
        font-size: ${sizes.iconSizeLargest};
    }
    .sidebarModal{
        width: ${sizes.sidebarSize};

    }
`