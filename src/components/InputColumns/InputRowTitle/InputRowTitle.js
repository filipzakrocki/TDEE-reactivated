import React from 'react';
import './InputRowTitle.scss'

const InputRowTitle = (props) => {
    return (
        <div className='inputRowTitle'>
            <h1>{props.children}</h1>
        </div>
    );
}

export default InputRowTitle;
