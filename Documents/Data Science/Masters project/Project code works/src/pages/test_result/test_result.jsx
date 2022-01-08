import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHookstate } from '@hookstate/core';

import { userResult, testQuestion } from '../../services/store';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

import Doctor_1 from '../../assets/images/illustrations/doctor-1.svg';

const TestResult = () => {

  const question = useHookstate(testQuestion);
  const result = useHookstate(userResult);
  
  useEffect(() => {
    question.set(1);
  }, []);

  return (
    <div id="test-result">
      <Header />
      <div className="main">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>Your Risk is {result.value.percentage}</h1>
              {/* <h1>Your Risk is 9%</h1> */}
              <h2>{result.value.level}</h2>
              {/* <h2>LOW</h2> */}
              <p className="mt-2">{result.value.message}</p>
              {/* <p className="mt-2">Know your risk of diabetes by providing you correct details the in following forms. We have created an online diabetes risk assessment which aims to predict an individual’s risk of developing diabetes within the next ten years. The test is based on a machine learning algorithm trained on diabetes data</p> */}
              <Link to="/test">
                <button class="btn">Take Test Again</button>
              </Link>
            </div>
            <div className="col-md-6">
              <img src={Doctor_1} alt="Image" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default TestResult
