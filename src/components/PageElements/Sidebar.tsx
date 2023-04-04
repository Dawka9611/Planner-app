import { BsBarChart, BsCalendar3, BsCalendarDay, BsCalendarMonth, BsCalendarWeek, BsHouse, BsHouseDoor, BsQuestionLg } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { sizes } from '../../utilities/style/Variables'
import MonthCalendar from './MonthCalendar'

const sidebarData = [
    // { label: "Нүүр хуудас", link: "/", icon: <BsHouse /> },
    { label: "Жилийн хуанли", link: "/year-plan", icon: <BsCalendar3 /> },
    { label: "Сарын төлөвлөгөө", link: "/month-plan", icon: <BsCalendarMonth /> },
    { label: "7 хоногийн төлөвлөгөө", link: "/week-plan", icon: <BsCalendarWeek /> },
    { label: "Өдрийн төлөвлөгөө", link: "/day-plan", icon: <BsCalendarDay /> },
    { label: "Гүйцэтгэл хянах", link: "/performance", icon: <BsBarChart /> },
    { label: "Тусламж", link: "/help", icon: <BsQuestionLg /> },
]
const Sidebar = () => {
    return <SidebarStyle>
        <div className='contentBox'>
            <MonthCalendar/>
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
    min-height: 100vh;
    height: 100%;
    padding: ${sizes.spaceMedium};
    box-sizing: border-box;
    position: sticky;
    top: 0;
    left:0;

    .contentBox{
        margin-top: ${sizes.topbarHeight};
        /* border: 1px solid white; */
        .linkElement{
            padding: ${sizes.spaceMedium} ${sizes.spaceSmall};
            border-radius: 4px;
            transition: all ease-in-out 0.3s;
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
            &:active{
                scale: 0.95;
            }
            }
        }
    }
`