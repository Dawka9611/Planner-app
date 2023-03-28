import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { sizes } from '../utilities/style/Variables'

export const SmallModal = ({ data }) => {
    return <SmallModalStyle>
        {data?.map(el => {
            return <Link key={el.label} to={el.link} className="links">
                <span className='icon'>{el.icon}</span>
                <span className='label'>{el.label}</span>
            </Link>
        })}
    </SmallModalStyle>
}

const SmallModalStyle = styled.div`
    position: absolute;
    z-index: 100;
    top: calc(${sizes.topbarHeight} + 5px);
    right: 10px;
    background-color: ${p => p.theme.mainColorDarker};
    display: flex;
    flex-direction: column;
    padding: ${sizes.spaceMedium};
    border-radius: 6px;
    row-gap: ${sizes.spaceMedium};
    .links{
        display: flex;
        color: ${p => p.theme.textColor};
        column-gap: ${sizes.spaceSmall};
        text-decoration: none;
        align-items: center;
        transition: all ease-in-out 0.3s;
        padding: ${sizes.spaceSmallest} ${sizes.spaceMedium};
        border-radius: 4px;
        box-sizing: border-box;
        .icon{
            font-size: ${sizes.iconSize};
            color: ${p => p.theme.syan};
            margin-top: 2px;
        }
        .label{

        }
        &:hover{
            background-color: ${p => p.theme.mainColorDarker};
            background: ${p => p.theme.gradientSyan};
                .icon{
                    color: ${p => p.theme.textColorHover};
                }
            &:active{
                scale: 0.95;
            }
        }
    }
`
