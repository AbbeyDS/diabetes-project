import React, { useEffect } from 'react';
import { useHookstate } from '@hookstate/core';

import { userInsulinLevel, testQuestion } from '../../../services/store';

import Test_6 from "../../../assets/images/illustrations/insulin.svg";

const Insulin = () => {

  const insulinLevel = useHookstate(userInsulinLevel);
  const question = useHookstate(testQuestion);

  // useEffect(() => {
  //   if (insulinLevel.value == "" || parseFloat(insulinLevel.value) < 0) {
  //     insulinLevel.set(0);
  //   }
  // }, [insulinLevel.value])

  return (
    <div id="insulin">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="q-number">5</div>
            <h2>Insulin Level</h2>
            <div className="counter">
              <div className="counter-btn" unselectable="on" onClick={() => insulinLevel.value !== "" && insulinLevel.value > 0 && insulinLevel.set(parseFloat(insulinLevel.value) - 1)}>-</div>
              <input type="number" name="insulinLevel" value={insulinLevel.value} onChange={(e) => insulinLevel.set(e.target.value)} autoFocus />
              <div className="counter-btn" unselectable="on" onClick={() => insulinLevel.value === "" ? insulinLevel.set(1) : insulinLevel.set(parseFloat(insulinLevel.value) + 1)}>+</div>
            </div>
            <div className="control">
              <button className="btn" onClick={() => question.set(question.value - 1)}>Previous</button>
              <h6>Question 5 out of 6</h6>
              <button className="btn" onClick={() => question.set(question.value + 1)}>Next</button>
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

export default Insulin;
