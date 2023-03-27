import { useContext, useState } from 'react'
import styled from 'styled-components'
import { sizes } from '../../../utilities/style/Variables'
import { BsChevronDown, BsChevronUp, BsPerson, BsQuestionLg } from 'react-icons/bs'
import UserContext from '../../../utilities/context/UserContext'
// import 'react-icons/style.css';

const Topbar = () => {
    const [showModal, setShowModal] = useState(false)
    const { user } = useContext(UserContext)

    const HandleModal = () => {
        setShowModal(prev => !prev)
    }
    return <TopbarStyle>
        <div className='topbarItem' onClick={HandleModal}>
            {user?.token && (!showModal ? <BsChevronDown /> : <BsChevronUp />)}
            {user?.token
                ? <div className='username'>
                    {user.name}
                </div>
                : <div className='userIcon noGradient'>
                    <BsQuestionLg />
                </div>
            }
            <div className='userIcon'>
                <BsPerson />
            </div>
        </div>
    </TopbarStyle>
}

export default Topbar

const TopbarStyle = styled.div`
    position: sticky;
    top: 0;
    left:0;
    z-index: 100;
    height: ${sizes.topbarHeight};
    box-sizing: border-box;
    width: 100%;
    background-color: ${p => p.theme.mainColorDarker};
    color: ${p => p.theme.textColor};
    display: flex;
    justify-content: flex-end;
    padding: ${sizes.spaceMedium} ${sizes.spaceLarge};
    .topbarItem{
        display: flex;
        column-gap: ${sizes.spaceSmall};
        align-items: center;
        transition: color 0.5s;
        .username{

        }
        .userIcon{
            width: 32px;
            height: 32px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: ${p => p.theme.mainColorDarker};
            background: ${p => p.theme.gradientSyan};
            backdrop-filter: blur(5px);
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1)
            font-size: ${sizes.iconSize};
            transition: all ease-in-out 0.2s;
            &:hover{
                color: ${p => p.theme.textColorHover};
                /* border: ${p => p.theme.borderLightHover} */
                scale: 1.02;
            }
        }
        .noGradient{
            background: transparent;
            border: ${p => p.theme.borderLighter};
            margin-right: 4px;
            scale: 0.98;
        }
        &:hover{
            cursor: pointer;
            .username{
                color: ${p => p.theme.textColorHover};
            }
        }
    }
`