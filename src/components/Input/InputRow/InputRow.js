import React from 'react';
import './InputRow.scss'

const InputRow = (props) => {
    return (
        <tr className='inputRow'>
            <td className='inputRow-label'>{props.label}</td>
            <td className='inputRow-input'><input disabled={props.disabled} required  type={props.type}/></td>
            <td className='inputRow-units'>{props.units}</td>
        </tr>
    );
}

export default InputRow;
