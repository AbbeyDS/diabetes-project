import React, { useEffect } from 'react';
import { useHookstate } from '@hookstate/core';

import { userWeight, userHeight, testQuestion } from '../../../services/store';

const Weight = () => {

  const weight = useHookstate(userWeight);
  const height = useHookstate(userHeight);
  const question = useHookstate(testQuestion);

  // useEffect(() => {
  //   if (weight.value === "" || parseFloat(weight.value) < 0) {
  //     weight.set(0);
  //   }
  //   if (height.value === "" || parseFloat(height.value) < 0) {
  //     height.set(0);
  //   }
  // }, [weight.value, height.value])

  return (
    <div id="weight">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="q-number">2</div>
            <h2>Weight (kg)</h2>
            <div className="counter">
              <div className="counter-btn" unselectable="on" onClick={() => weight.value !== "" && weight.value > 0 && weight.set(parseFloat(weight.value) - 1)}>-</div>
              <input type="number" name="weight" value={weight.value} onChange={(e) => weight.set(e.target.value)} autoFocus />
              <div className="counter-btn" unselectable="on" onClick={() => weight.value === "" ? weight.set(1) : weight.set(parseFloat(weight.value) + 1)}>+</div>
            </div>
            <div className="control">
              <button className="btn" onClick={() => question.set(question.value - 1)}>Previous</button>
              <h6>Question 2 out of 6</h6>
              <button className="btn" onClick={() => question.set(question.value + 1)}>Next</button>
            </div>
          </div>
          <div className="col-md-6">
            <h2>Height (ft)</h2>
            <div className="counter">
              <div className="counter-btn" unselectable="on" onClick={() => height.value !== "" && height.value > 0 && height.set(parseFloat(height.value) - 1)}>-</div>
              <input type="number" name="height" value={height.value} onChange={(e) => height.set(e.target.value)} autoFocus />
              <div className="counter-btn" unselectable="on" onClick={() => height.value === "" ? height.set(1) : height.set(parseFloat(height.value) + 1)}>+</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Weight;
