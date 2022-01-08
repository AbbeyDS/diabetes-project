import React from 'react';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

import Weight1 from '../../assets/images/articles/weight-1.jpg';
import Weight2 from '../../assets/images/articles/weight-2.png';
import Weight3 from '../../assets/images/articles/weight-3.jpg';
import Weight4 from '../../assets/images/articles/diet.jpg';



const Weight = () => {
  return (
    <div id="weight" class="articles">
      
      <Header />

      <div className="main">
        <div className="container">
          <h1>Healthy Living - Weight loss</h1>
          <p className="first-paragraph">When you have diabetes, being overweight brings added risks. Find the best strategy to keep extra weight off and stay healthy.</p>
          <p>By losing just a few pounds with healthy eating and exercise, you’ll start to feel better. You’ll have more energy. And it will get easier to manage your diabetes, all while reducing your risk of developing other related problems.</p>
        </div>

        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6 px-5">
              <h4>Get back to basics</h4>
              <p className='mt-5'>The key to weight loss for most people is simply finding the right combination of exercise, healthy foods and portion control. No fad diet required.</p>
            </div>
            <div className="col-md-6 p-0">
              <img src={Weight1} alt="Image" />
            </div>
            <div className="col-md-6 p-0">
              <img src={Weight2} alt="Image" />
            </div>
            <div className="col-md-6 px-5">
              <h4>Know why you’re eating</h4>
              <p className='mt-5'>Emotional eating can quickly sabotage weight loss efforts. If you can pinpoint the emotions that cause you to reach for food, you can stay on track.</p>
            </div>
            <div className="col-md-6 px-5">
              <h4>Stay positive</h4>
              <p className='mt-5'>The way we frame our weight loss journey can have a big impact on progress—good or bad. Learn some positive self-talk strategies that will keep you in the right frame of mind.</p>
            </div>
            <div className="col-md-6 p-0">
              <img src={Weight3} alt="Image" />
            </div>
            <div className="col-md-6 p-0">
              <img src={Weight4} alt="Image" />
            </div>
            <div className="col-md-6 px-5">
              <h4>Watch what you eat</h4>
              <p className='mt-5'>If you’re trying to lose weight, it’s important to make sure you aren’t consuming additional calories your body doesn’t need. That means trying to time your meals or snacks around your workouts so you aren’t eating extra snacks for the sake of the workout.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      
    </div>
  )
}

export default Weight;
