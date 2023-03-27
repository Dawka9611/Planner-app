import styled from 'styled-components'
import { sizes } from '../utilities/style/Variables'

const Button = ({ label, icon, Handler, width = 150 }) => {
    return <ButtonStyle width={width}>
        <button className='button' onClick={() => Handler()}>
            {icon ? <span> {icon}</span> : ''}
            {label ? label : 'Хадгалах'}
        </button>
    </ButtonStyle>
}

export default Button
const ButtonStyle = styled.div`
    width: 100%;
    .button{
        width: ${p => p.width}px;
        color: ${p => p.theme.textColor};
        background-color: ${p => p.theme.mainColorDarker};
        background: ${p => p.theme.gradientSyan};
        backdrop-filter: blur(5px);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        padding: ${sizes.spaceSmall} ${sizes.spaceLarger};
        border-radius: 4px;
        outline: none;
        border: none;
        &:hover{
            cursor: pointer;
        }
    }
`