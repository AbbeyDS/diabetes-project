import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

import Welcome from '../../assets/images/illustrations/test-welcome.svg';

const Test = () => {
  return (
    <div id="test">
      <Header />
      <div className="main">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <h1>Run Diabetes Diagnostics in Less than 5 Minutes</h1>
              <p className="mt-2">Our Data Driven Health care Tool has been built to Assist you with Diabetes Risk Self Assessment. With your Health Data, Learn about your diabetic tendencies. Provide your Health Data and get your risk assessment report in less than 5 minutes.</p>
              <Link to="/take-test">
                <button class="btn">Start Now</button>
              </Link>
            </div>
            <div className="col-md-7">
              <img src={Welcome} alt="Image" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Test
