import React, { useEffect } from 'react';
import { useHookstate } from '@hookstate/core';

import { userAge, testQuestion } from '../../../services/store';

import Test_1 from "../../../assets/images/illustrations/test-1.svg";

const Age = () => {

  const age = useHookstate(userAge);
  const question = useHookstate(testQuestion);

  // useEffect(() => {
  //   if (age.value == "" || parseFloat(age.value) < 0) {
  //     age.set(0);
  //   }
  // }, [age.value])

  return (
    <div id="age">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="q-number">1</div>
            <h2>Age</h2>
            <div className="counter">
              <div className="counter-btn" unselectable="on" onClick={() => age.value !== "" && age.value > 0 && age.set(parseFloat(age.value) - 1)}>-</div>
              <input type="number" name="age" value={age.value} onChange={(e) => age.set(e.target.value)} autoFocus />
              <div className="counter-btn" unselectable="on" onClick={() => age.value === "" ? age.set(1) : age.set(parseFloat(age.value) + 1)}>+</div>
            </div>
            <div className="control">
              <button className="btn" disabled>Previous</button>
              <h6>Question 1 out of 6</h6>
              <button className="btn" onClick={() => age.value != "" && question.set(question.value + 1)}>Next</button>
            </div>
          </div>
          <div className="col-md-6">
            <img src={Test_1} alt="Image" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Age;
