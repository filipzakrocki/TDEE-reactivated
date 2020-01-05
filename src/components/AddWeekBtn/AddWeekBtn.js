import React from 'react';
import {connect} from 'react-redux'
import './AddWeekBtn.scss'

import * as actions from '../../store/actions/index'

const AddWeekBtn = (props) => {
    return (
        <button onClick={() => props.lockInitialInputs()} className='addWeekBtn'>Add another week</button>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        lockInitialInputs: () => dispatch(actions.lockInitialInputs())
    };
  };

export default connect(null, mapDispatchToProps)(AddWeekBtn);
