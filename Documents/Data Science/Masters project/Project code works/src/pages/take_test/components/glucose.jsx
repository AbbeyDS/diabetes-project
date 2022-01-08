import React, { useEffect } from 'react';
import { useHookstate } from '@hookstate/core';

import { userGlucoseLevel, testQuestion } from '../../../services/store';

import Test_5 from "../../../assets/images/illustrations/home-1.svg";

const Glucose = () => {

  const glucoseLevel = useHookstate(userGlucoseLevel);
  const question = useHookstate(testQuestion);

  // useEffect(() => {
  //   if (glucoseLevel.value == "" || parseFloat(glucoseLevel.value) < 0) {
  //     glucoseLevel.set(0);
  //   }
  // }, [glucoseLevel.value])

  return (
    <div id="glucose">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="q-number">4</div>
            <h2>Glucose Level</h2>
            <div className="counter">
              <div className="counter-btn" unselectable="on" onClick={() => glucoseLevel.value !== "" && glucoseLevel.value > 0 && glucoseLevel.set(parseFloat(glucoseLevel.value) - 1)}>-</div>
              <input type="number" name="glucoseLevel" value={glucoseLevel.value} onChange={(e) => glucoseLevel.set(e.target.value)} autoFocus />
              <div className="counter-btn" unselectable="on" onClick={() => glucoseLevel.value === "" ? glucoseLevel.set(1) : glucoseLevel.set(parseFloat(glucoseLevel.value) + 1)}>+</div>
            </div>
            <div className="control">
              <button className="btn" onClick={() => question.set(question.value - 1)}>Previous</button>
              <h6>Question 4 out of 6</h6>
              <button className="btn" onClick={() => question.set(question.value + 1)}>Next</button>
            </div>
          </div>
          <div className="col-md-6">
            <img src={Test_5} alt="Image" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Glucose;
