import React from 'react';
import './InitialInput.scss';

import InputRowTitle from '../../../components/InputColumns/InputRowTitle/InputRowTitle'
import InputRow from '../../../components/InputColumns/InputRow/InputRow'
import InputTable from '../../../components/InputColumns/InputTable/InputTable'

const initialInput = () => {
    return (
        <div className='initialInput'>
            <InputRowTitle children='Initial Input'/>
            <InputTable>
                <InputRow type='date' label='Start Date' units='        '/>
                <InputRow type='number' label='Starting Weight' units='kg/lbs'/>
                <InputRow type='number' label='Goal Weight' units='kg/lbs'/>
                <InputRow type='number' label='Weight change per week' units='kg/lbs'/>
                <InputRow type='number' label='Target Daily Deficit' units='kcal'/>
            </InputTable>
        </div>
    );
}

export default initialInput;
