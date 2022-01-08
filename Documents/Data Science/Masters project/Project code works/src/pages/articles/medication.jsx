import React from 'react';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

import Medication3 from '../../assets/images/articles/medication-3.jpg';

import Insulin from '../../assets/images/articles/insulin.jpg';
import Injection from '../../assets/images/articles/injection.jpg';

const Medication = () => {
  return (
    <div id="diet" class="articles">
      
      <Header />

      <div className="main">
        <div className="container">
          <h1>Medication and Treatment of Diabetes</h1>
          <p className="first-paragraph">The aim of diabetes treatment is to keep, within reason, blood glucose levels as near to normal as possible. Training in self management of diabetes forms an essential part of diabetes management. Treatment should be agreed on an individual basis and address medical, psychosocial and lifestyle issues.</p>
          <p>Depending on what type of diabetes you have, blood sugar monitoring, insulin and oral medications may play a role in your treatment. Eating a healthy diet, maintaining a healthy weight and participating in regular activity also are important factors in managing diabetes.</p>
        </div>

        <img src={Medication3} alt="Diabetes app" className='banner' />

        <div className="container">
          <h4 className="mt-5">Oral medications: Getting it right.</h4>
          <p>There are many different types of drugs that can work in different ways to lower your blood sugar. Sometimes one medication will be enough, but in other cases, your doctor may prescribe a combination of medications.</p>
          <p>Talking to your doctor to understand what is being prescribed and how it works can be helpful. And keeping an open mind helps, too.</p>

          <h4 className="mt-5">All about Insulin.</h4>
          <div className="row">
            <div className="col-md-6">
              <p>Type 1 diabetes means using insulin. However, if you have type 2 diabetes, treatment plans can change depending on who you are.  Some people can manage it with healthy eating and exercise, or with oral medications, while others may also need to use insulin.</p>
              <p>It’s common for your medication needs to change over time. And that’s a good thing. The most important thing is to get to feeling your best.</p>
            </div>
            <div className="col-md-6 img-right">
              <img src={Insulin} alt="Image" />
            </div>
          </div>

          <h4 className="mt-5">A quick guide to insulin </h4>
          <p>If you’re just starting out with insulin, it can take a little getting used to. With a little practice, you’ll be a pro in no time.</p>
          <p>Insulin is a naturally occurring hormone secreted by your pancreas. If you are prescribed insulin, it may be because your body doesn’t produce it (type 1 diabetes) or your body doesn’t use it properly (type 2 diabetes).</p>
          <p>There are many different types of insulin sold in the United States, which differ in how they’re made, how they work in the body, and how much they cost. It’s also available in different strengths—most commonly, U-100. Your doctor will help you find the right type of insulin for your health needs.</p>
          <p>When it comes to syringes, your doctor will advise on which capacity you need based on your insulin dose. In general, smaller capacity syringes can be easier to read and draw an accurate dose. Here are some tips:</p>
          <ul>
            <li>If your largest dose is close to the syringe's maximum capacity, consider buying the next size up in case your dosage changes</li>
            <li>If you need to measure doses in half units, be sure to choose a syringe that has these markings</li>
            <li>If you're traveling outside of the U.S., be certain to match your insulin strength with the correct size syringe</li>
          </ul>

          <h4 className="mt-5">How it works</h4>
          <div className="row">
            <div className="col-md-6">
              <p>When it comes to insulin, you’ll get to know three terms: onset, peak time and duration. The onset is how long it takes for the insulin to start lowering your blood sugar. The peak time is when it’s at its maximum strength, and duration is how long it continues to work.</p>
              <p>Here’s a quick look at the different types of insulin. If you need a mix of two types, you can talk to your doctor about getting a premixed supply.</p>
            </div>
            <div className="col-md-6 img-right">
              <img src={Injection} alt="Image" />
            </div>
            <ul className='mt-5 pl-3'>
              <li><b>Rapid-acting insulin</b> begins to work about 15 minutes after injection, peaks in about 1 hour, and continues to work for 2 to 4 hours</li>
              <li><b>Regular or short-acting insulin</b> usually reaches the bloodstream within 30 minutes after injection, peaks anywhere from 2 to 3 hours after injection, and is effective for approximately 3 to 6 hours</li>
              <li><b>Intermediate-acting insulin</b> generally reaches the bloodstream about 2 to 4 hours after injection, peaks 4 to 12 hours later, and is effective for about 12 to 18 hours</li>
              <li><b>Long-acting insulin</b> reaches the bloodstream several hours after injection and tends to lower glucose levels fairly evenly over a 24-hour period</li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
      
    </div>
  )
}

export default Medication
