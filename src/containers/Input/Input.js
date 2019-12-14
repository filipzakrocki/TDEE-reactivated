import React from "react";
import "./Input.scss";

import CurrentStats from './CurrentStats/CurrentStats';
import InitialInput from './IntitialInputs/InitialInput';

import InputColumn from '../../components/InputColumns/InputColumn';

const Input = () => {
  return (
    <section className='input'>
       <InputColumn>
       <InitialInput/>
       </InputColumn>
      <InputColumn>
      <CurrentStats/>
      </InputColumn>
    </section>
  );
};

export default Input;
