import React from 'react';
import './CurrentStats.scss';

import InputRowTitle from '../../../components/InputColumns/InputRowTitle/InputRowTitle'

const CurrentStats = () => {
    return (
        <div className='currentStats'>
            <InputRowTitle children={'Current Stats'}/>
        </div>
    );
}

export default CurrentStats;
