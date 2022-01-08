import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useHookstate } from '@hookstate/core';

import { userBloodPressure, userAge, userWeight, userHeight, userBmi, userGlucoseLevel, userInsulinLevel, testQuestion, userResult } from '../../../services/store';

import Test_6 from "../../../assets/images/illustrations/test-6.svg";

const Blood = () => {

  const age = useHookstate(userAge);
  const weight = useHookstate(userWeight);
  const height = useHookstate(userHeight);
  const bmi = useHookstate(userBmi);
  const glucoseLevel = useHookstate(userGlucoseLevel);
  const insulinLevel = useHookstate(userInsulinLevel);
  const bloodPressure = useHookstate(userBloodPressure);

  const question = useHookstate(testQuestion);
  const result = useHookstate(userResult);

  const api = ""; // Link to API

  // useEffect(() => {
  //   if (bloodPressure.value == "" || parseFloat(bloodPressure.value) < 0) {
  //     bloodPressure.set(0);
  //   }
  // }, [bloodPressure.value])

  const submitData = () => {
    const data = {age, bmi, glucoseLevel, insulinLevel, bloodPressure};

    fetch(api, {
      method: "post",
      body: data,
    }).then((response) => {
      if (response.status_code == 200) {
        result.set({
          percentage: response.body.percentage,
          level: response.body.level,
          message: response.body.message,
        });

        age.set(1);
        weight.set(1);
        height.set(1);
        bmi.set(1);
        glucoseLevel.set(1);
        insulinLevel.set(1);
        bloodPressure.set(1);

        return <Redirect />;
      }
    })
  }

  return (
    <div id="blood">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="q-number">6</div>
            <h2>Blood Pressure</h2>
            <div className="counter">
              <div className="counter-btn" unselectable="on" onClick={() => bloodPressure.value !== "" && bloodPressure.value > 0 && bloodPressure.set(parseFloat(bloodPressure.value) - 1)}>-</div>
              <input type="number" name="bloodPressure" value={bloodPressure.value} onChange={(e) => bloodPressure.set(e.target.value)} autoFocus />
              <div className="counter-btn" unselectable="on" onClick={() => bloodPressure.value === "" ? bloodPressure.set(1) : bloodPressure.set(parseFloat(bloodPressure.value) + 1)}>+</div>
            </div>
            <div className="control">
              <button className="btn" onClick={() => question.set(question.value - 1)}>Previous</button>
              <h6>Question 6 out of 6</h6>
              <button className="btn" onClick={submitData}>Result</button>
            </div>
          </div>
          <div className="col-md-6">
            <img src={Test_6} alt="Image" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blood;
