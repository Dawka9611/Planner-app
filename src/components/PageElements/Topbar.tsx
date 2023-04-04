import { useContext, useState } from 'react'
import styled from 'styled-components'
import { sizes } from '../../utilities/style/Variables'
import { BsChevronDown, BsChevronUp, BsDoorOpen, BsKey, BsPerson, BsPersonLock, BsPersonPlus, BsQuestionLg } from 'react-icons/bs'
import UserContext from '../../utilities/context/UserContext'
import { SmallModal } from '../../components/Modals'
import { Link } from 'react-router-dom'
// import 'react-icons/style.css';
const Logout = () => {
    console.log('out')
}

const userModalData = [
    { label: "Нууц үе солих", link: "/forgot-password", icon: <BsKey /> },
    { label: "Гарах", link: "/", icon: <BsDoorOpen />, function: Logout }
]

const userAccessModalData = [
    { label: "Нэвтрэх", link: "/login", icon: <BsPersonLock /> },
    { label: "Бүртгүүлэх", link: "/signup", icon: <BsPersonPlus />, function: Logout }
]

const Topbar = () => {
    const [showModal, setShowModal] = useState({
        userModal: false,
        accessModal: false
    })

    const { user } = useContext(UserContext)

    const HandleModal = () => {
        setShowModal({
            accessModal: false,
            userModal: true
        })
    }

    const HandleAccessModels = () => {
        if (!user.token) {
            setShowModal({
                accessModal: true,
                userModal: false
            })
        }
    }

    return <TopbarStyle>
        {user?.token ?
            <div className='topbarItem' onClick={HandleModal}>
                {!showModal.userModal ? <BsChevronDown /> : <BsChevronUp />}
                <div className='username'>
                    {user.name}
                </div>
                <div className='userIcon' onClick={() => HandleAccessModels()}>
                    <BsPerson />
                </div>
            </div>
            : <div className='topbarItem'>
                <Link to='/help' className='userIcon noGradient'>
                    <BsQuestionLg />
                </Link>
                <div className='userIcon' onClick={() => HandleAccessModels()}>
                    <BsPerson />
                </div>
            </div>}
        {showModal.userModal
            ? <SmallModal
                data={userModalData}
            />
            : ''
        }
        {showModal.accessModal
            ? <SmallModal
                data={userAccessModalData}
            />
            : ''
        }
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
            width: 30px;
            height: 30px;
            border: ${p => p.theme.borderLighter};
            margin-right: 4px;
            color: ${p => p.theme.textColor};

        }
        &:hover{
            cursor: pointer;
            .username{
                color: ${p => p.theme.textColorHover};
            }
        }
    }
    @media only screen and (max-width: 650px){
        height: ${sizes.topbarHeightMobile};
    }
`