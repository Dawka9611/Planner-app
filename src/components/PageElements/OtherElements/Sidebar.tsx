import { BsBarChart, BsCalendar3, BsCalendarDay, BsCalendarMonth, BsCalendarWeek, BsQuestionLg } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { sizes } from '../../../utilities/style/Variables'

const sidebarData = [
    { label: "Жилийн төлөвлөгөө", link: "/year-plan", icon: <BsCalendar3 /> },
    { label: "Сарын төлөвлөгөө", link: "", icon: <BsCalendarMonth /> },
    { label: "7 хоногийн төлөвлөгөө", link: "", icon: <BsCalendarWeek /> },
    { label: "Өдрийн төлөвлөгөө", link: "", icon: <BsCalendarDay /> },
    { label: "Гүйцэтгэл хянах", link: "", icon: <BsBarChart /> },
    { label: "Тусламж", link: "", icon: <BsQuestionLg /> },
]
const Sidebar = () => {
    return <SidebarStyle>
        <div className='contentBox'>
            {sidebarData.map(el => <div key={el.link} className="linkElement">
                <Link to={el.link} className='link'>
                    <span className='icon'> {el.icon}</span>
                    <span>{el.label}</span>
                </Link>
            </div>
            )}
        </div>
    </SidebarStyle>
}

export default Sidebar

const SidebarStyle = styled.div`
    width: ${sizes.sidebarSize};
    background-color: ${p => p.theme.mainColorDarker};
    color: ${p => p.theme.textColor};
    height: 100%;
    padding: ${sizes.spaceMedium};
    box-sizing: border-box;
    .contentBox{
        margin-top: 120px;
        /* border: 1px solid white; */
        .linkElement{
            padding: ${sizes.spaceMedium} ${sizes.spaceSmall};
            transition: all ease-in-out 0.3s;
            border-radius: 4px;
            .link{
                display: flex;
                align-items: center;
                column-gap: ${sizes.spaceMedium};
                text-decoration: none;
                color: ${p => p.theme.textColor};
                font-weight: ${p => p.theme.fontWeightBold};
                font-size: ${sizes.fontSizeLarge};
                .icon{
                    font-size: ${sizes.iconSizeLarge};
                    color: ${p => p.theme.syan};
                    margin-top: 3px;
                }
            }
            &:hover{
                background-color: ${p => p.theme.mainColorDarker};
                background: ${p => p.theme.gradientSyan};
                .link{
         
                .icon{
                    color: ${p => p.theme.textColor};
                }
            }
            }
        }
    }
`