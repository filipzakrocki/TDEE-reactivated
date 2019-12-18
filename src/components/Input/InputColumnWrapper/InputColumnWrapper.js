import React from 'react';
import './InputColumnWrapper.scss';

const InputColumnWrapper = (props) => {
    return (
        <div className='inputColumnWrapper'>
            {props.children}
        </div>
    );
}

export default InputColumnWrapper;
