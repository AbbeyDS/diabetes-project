import React from 'react';
import { useHookstate } from '@hookstate/core';

import { userBmi, userWeight, userHeight, testQuestion } from '../../../services/store';

import Test_3 from "../../../assets/images/illustrations/test-3.svg";

const Bmi = () => {

  const bmi = useHookstate(userBmi);
  const weight = useHookstate(userWeight);
  const height = useHookstate(userHeight);
  const question = useHookstate(testQuestion);

  const weightValue = parseFloat(weight.value);
  const heightInMeter = parseFloat(height.value) * 0.3048;
  const heightSquared = heightInMeter ** 2;

  bmi.set((weightValue/heightSquared).toFixed(2));


  return (
    <div id="bmi">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="q-number">3</div>
            <h3>Your <b>Body Mass Index (BMI) is ({bmi.value})</b></h3>
            <div className="control">
              <button className="btn" onClick={() => question.set(question.value - 1)}>Previous</button>
              <h6>Question 3 out of 6</h6>
              <button className="btn" onClick={() => bmi.value != "" && question.set(question.value + 1)}>Next</button>
            </div>
          </div>
          <div className="col-md-6">
            <img src={Test_3} alt="Image" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bmi;
