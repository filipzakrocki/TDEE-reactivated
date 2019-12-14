import React from 'react';
import './InitialInput.scss';

import InputRowTitle from '../../../components/InputColumns/InputRowTitle/InputRowTitle'

const initialInput = () => {
    return (
        <div className='initialInput'>
            <InputRowTitle children='Initial Input'/>
        </div>
    );
}

export default initialInput;
