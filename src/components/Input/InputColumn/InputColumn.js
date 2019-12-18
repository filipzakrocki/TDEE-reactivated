import React from 'react';
import './InputColumn.scss';

const InputColumn = (props) => {
    return (
        <div className='inputColumn'>
            {props.children}
        </div>
    );
}

export default InputColumn;
