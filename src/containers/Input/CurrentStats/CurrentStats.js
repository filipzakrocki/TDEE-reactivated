import React from 'react';
import './CurrentStats.scss';

import InputRowTitle from '../../../components/InputColumns/InputRowTitle/InputRowTitle'
import InputRow from '../../../components/InputColumns/InputRow/InputRow'
import InputTable from '../../../components/InputColumns/InputTable/InputTable'

const CurrentStats = () => {
    return (
        <div className='currentStats'>
            <InputRowTitle children={'Current Stats'}/>
            <InputTable>
                <InputRow type='date' label="Today's Date" />
                <InputRow type='number' label='Your AVG weight' units='kg/lbs'/>
                <InputRow type='number' label='You have lost' units='kg/lbs'/>
                <InputRow type='number' label='Your AVG TDEE' units='kg/lbs'/>
                <InputRow type='number' label='Weeks to goal' units='kcal'/>
                <InputRow type='number' label='Recommended daily KCAL' units='kcal'/>
            </InputTable>
        </div>
    );
}

export default CurrentStats;
