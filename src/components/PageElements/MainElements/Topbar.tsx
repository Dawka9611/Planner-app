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
    height: ${sizes.topbarHeight};
    box-sizing: border-box;
    width: 100%;
    background-color: ${p => p.theme.mainColorDark};
    color: ${p => p.theme.textColor};
    display: flex;
    justify-content: flex-end;
    padding: ${sizes.spaceMedium} ${sizes.spaceLarger};
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
            background-color: ${p => p.theme.mainColorDark};
            background: ${p => p.theme.gradientSyan};
            backdrop-filter: ${sizes.backdropFilter};
            font-size: ${sizes.iconSize};
            &:hover{
                color: ${p => p.theme.textColorHover};
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