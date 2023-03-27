import styled from 'styled-components'
import { sizes } from '../utilities/style/Variables'

export const Textarea = ({ label, required, name, rows, cols, Value, Handler, color = "dark" }) => {
    return <InputStyle color={color}>
        <div className="label">
            {label}
        </div>
        <textarea
            name={name}
            rows={rows ?? 3}
            cols={cols ?? 40}
            value={Value}
            onChange={e => Handler(name, e.target.value)}
            required={required}
            className="input textarea"
        />
    </InputStyle>

}
export const TextInput = ({ label, required, name, Value, Handler, color = "dark" }) => {
    return <InputStyle color={color}>
        <div className="label">
            {label}
        </div>
        <input
            name={name}
            value={Value}
            onChange={e => Handler(name, e.target.value)}
            required={required}
            className="input textinput"
        />
    </InputStyle>
}

export const DateInput = ({ label, required, name, Value, Handler, color = "dark" }) => {
    return <InputStyle color={color}>
        <div className="label">
            {label}
        </div>
        <input
            name={name}
            value={Value}
            onChange={e => Handler(name, e.target.value)}
            required={required}
            className="input date"
            type="date"
        />
    </InputStyle>
}

export const TimeInput = ({ label, required, name, Value, Handler, color = "dark" }) => {
    return <InputStyle color={color}>
        <div className="label">
            {label}
        </div>
        <input
            name={name}
            value={Value}
            onChange={e => Handler(name, e.target.value)}
            required={required}
            className="input time"
            type="time"
        />
    </InputStyle>
}

export const Password = ({ label, required, name, Value, Handler, color = "dark"  }) => {
    return <InputStyle>
        <div className="label" color={color}>
            {label}
        </div>
        <input
            name={name}
            value={Value}
            onChange={e => Handler(name, e.target.value)}
            required={required}
            type="password"
            className="input password"
        />
    </InputStyle>
}

export const NumberIput = ({ label, required, name, Value, Handler, color = "dark"  }) => {
    return <InputStyle color={color}>
        <div className="label">
            {label}
        </div>
        <input
            name={name}
            value={Value}
            onChange={e => Handler(name, e.target.value)}
            required={required}
            className="input numberinput"
        />
    </InputStyle>
}


const InputStyle = styled.div`
    box-sizing: border-box;
    min-width: min(100%,300px);
    padding: ${sizes.spaceSmall} 0px;
    .label{
        font-weight: ${sizes.fontWeightBold};
    }
    .input{
        box-sizing: border-box;
        max-width: 100%;
        width: 100%;
        border-radius: 4px;
        padding: ${sizes.spaceSmall} ${sizes.spaceSmall};
        border: ${p => p.theme.borderSyan};
        background-color: ${p => p.color === "darker" ? p.theme.mainColorDark : p.theme.mainColorDarker};
        color: ${p => p.theme.textColor};

        &:focus{
            outline: none;
            background-color: ${p => p.color === "darker" ? p.theme.mainColorDarker : p.theme.mainColorDark};
        }
    }

`