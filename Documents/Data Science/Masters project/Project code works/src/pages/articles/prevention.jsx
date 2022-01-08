import React from 'react';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

import Prevention1 from '../../assets/images/articles/prevention-1-2.jfif';
import Prevention2 from '../../assets/images/articles/prevention-2.jpg';
import Prevention3 from '../../assets/images/articles/prevention-3.jpg';
import Prevention4 from '../../assets/images/articles/prevention-4.jpg';



const Prevention = () => {
  return (
    <div id="prevention" class="articles">
      
      <Header />

      <div className="main">
        <div className="container">
          <h1>Prevention of Diabetes - Small changes lead to big results.</h1>
          <p className="first-paragraph">If you’ve been diagnosed with prediabetes, know that small changes to your lifestyle will lower your risk. Your doctor will help you create a plan and set goals that work for you. They may also refer you to a Centers for Disease Control and Prevention (CDC) recognized, evidence-based lifestyle change program. Don’t hesitate to ask for help along your journey.</p>
          <h4 className='mt-5'>Overweight? Know the impact.</h4>
          <p>If you’re overweight, it impacts more than your risk of developing type 2 diabetes. It leads to unhealthy cholesterol, high blood pressure, heart disease, high blood sugar and even stroke. The good news? Losing just 10-15 pounds can make a big difference.</p>
        </div>

        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6 px-5">
              <h4>Need reasons to quit?</h4>
              <p className='mt-5'>Smoking reduces the amount of oxygen that reaches your organs and can cause high blood pressure, unhealthy cholesterol, heart attacks and strokes.</p>
            </div>
            <div className="col-md-6 p-0">
              <img src={Prevention1} alt="Image" />
            </div>
            <div className="col-md-6 p-0">
              <img src={Prevention2} alt="Image" />
            </div>
            <div className="col-md-6 px-5">
              <h4>High blood pressure risks</h4>
              <p className='mt-5'>If you have high blood pressure, you're not alone; it affects nearly one in three American adults. You may need medication to get it under control.</p>
            </div>
            <div className="col-md-6 px-5">
              <h4>High blood sugar</h4>
              <p className='mt-5'>High blood sugar can have serious long-term complications, such as heart disease, nerve damage, kidney damage, and more.</p>
            </div>
            <div className="col-md-6 p-0">
              <img src={Prevention3} alt="Image" />
            </div>
            <div className="col-md-6 p-0">
              <img src={Prevention4} alt="Image" />
            </div>
            <div className="col-md-6 px-5">
              <h4>The diabetes-cancer link</h4>
              <p className='mt-5'>Researchers are exploring the link between type 2 diabetes and certain cancers. The two share some risk factors, such as age, gender and ethnicity, and lifestyle factors.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      
    </div>
  )
}

export default Prevention;
