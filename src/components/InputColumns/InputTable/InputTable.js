import React from 'react';
import './InputTable.scss'

const InputTable = (props) => {
    return (
        <table className='inputTable'>
            {props.children}
        </table>
    );
}

export default InputTable;
