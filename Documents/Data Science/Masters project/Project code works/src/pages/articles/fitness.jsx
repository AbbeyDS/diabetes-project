import React from 'react';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

import Fitness1 from '../../assets/images/articles/fitness-1.jpg';
import Fitness2 from '../../assets/images/articles/fitness-2.jpg';


const Fitness = () => {
  return (
    <div id="fitness" class="articles">
      
      <Header />

      <div className="main">
        <div className="container">
          <h1>Regular exercise can help put you back in control of your life.</h1>
          <p className="first-paragraph">If you’re not into regular exercise, putting together an exercise plan can be a bummer. But remember, along with your diet and medications, regular physical activity is an important part of managing diabetes or dealing with prediabetes. Because when you’re active, your cells become more sensitive to insulin so it works more effectively. And you just feel better. And look better.</p>
          <p>So, however you want to do it—taking regular walks around the block, going for a run, or signing up for a marathon—getting started is the most important part.</p>
          <h4 className='mt-5'>Get started. But get started safely.</h4>
          <p>It doesn’t matter where you are physically. If you’ve never set foot in a gym, that’s okay—as long as you start doing something now. If you haven’t been very active or are worried about your health, it’s important to consult your doctor and start slowly.</p>
          <p>Light walking is a great place to start—and a great habit to incorporate into your life. Walk with a loved one or just by yourself while listening to an audio book. Set goals every day and meet them and you’ll start feeling like you’re back in control of your life.</p>
        </div>

        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6">
              <img src={Fitness1} alt="Image" />
            </div>
            <div className="col-md-6">
              <img src={Fitness2} alt="Image" />
            </div>
          </div>

          <h4 className='mt-5'>Even little changes make a big difference</h4>

          <p>If you’re still struggling with getting started or feeling overwhelmed by the idea of starting a more active life, take heart: every change, no matter how small, makes a difference in your ability to manage diabetes. Even losing 10-15 pounds can have a significant impact on your health. The power to change is firmly in your hands—so get moving today.</p>

          <h4 className="mt-5">Need some inspiration?</h4>

          <p className='mt-4'>Check out the following to help you along your fitness journey:</p>

          <h6 className='mt-5'>Getting 150 minutes weekly</h6>
          <p>Don’t worry: Tackling 150 minutes of exercise is much easier than you might think!</p>

          <h6 className='mt-5'>Putting the fun in fitness</h6>
          <p>Exercise is often recommended prescription-style, not suggested as a fun part of life. Reframing physical activity is key.</p>

          <h6 className='mt-5'>Break a sitting streak</h6>
          <p>Breaking up sedentary time with light activity can help reduce health risks while netting you stronger muscles and burning calories.</p>

          <h6 className='mt-5'>The importance of balance training</h6>
          <p>As we age, we typically lose muscle mass, and as a result, we lose strength. That's why balance training is key.</p>

          <h6 className='mt-5'>Working out with video games</h6>
          <p>Over the past decade or so, a number of developers have created video games designed to get players of all ages on their feet.</p>

          <h6 className='mt-5'>Sports drinks impact on glucose (blood sugar)</h6>
          <p>Dehydration can lead to mildly higher blood sugar levels or significant spikes in your blood sugar.</p>

        </div>
      </div>

      <Footer />
      
    </div>
  )
}

export default Fitness;
