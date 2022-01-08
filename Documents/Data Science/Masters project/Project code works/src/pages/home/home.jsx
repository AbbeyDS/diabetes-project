import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

import Home_1 from '../../assets/images/illustrations/home-1.svg';
import Doctor_1 from '../../assets/images/illustrations/doctor-1.svg';
import Plant_1 from '../../assets/images/illustrations/plant-1.svg';
import Article_1 from '../../assets/images/illustrations/article-1.svg';
import Article_2 from '../../assets/images/illustrations/article-2.svg';
import Article_3 from '../../assets/images/illustrations/article-3.svg';
import Article_5 from '../../assets/images/illustrations/article-5.svg';

const Home = () => {
  return (
    <div id="home">

      <Header />

      <div className="main">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-col">
              <h1>Diabetes<br/>Education and<br/>Diagnosis App</h1>
              <p className="my-4">Use our AI powered diagnoses tool to know your risk of type 2 Diabetes.The first step to preventing type 2 diabetes is knowing your risk. Find out through our interactive tool.</p>
              <Link to="/test">
                <button className="btn">Take a test now</button>
              </Link>
            </div>
            <div className="col-md-6 img-col">
              <img src={Home_1} alt="Diabetes app" />
            </div>
          </div>
        </div>
      </div>

      <div className="articles">
        <div className="container">
          <h4 className="title">Articles On Diabetes Education</h4>
          <div className="row">
            <div className="col-md-4">
              <div className="header">
                <div className="icon">+</div>
                <h4>Diabetes In General</h4>
              </div>
              <p>Diabetes mellitus, commonly known as just diabetes, is a group of metabolic disorders characterized by a high blood sugar level over a prolonged period of time. Symptoms often include frequent urination, increased thirst and increased appetite.</p>
            </div>
            <div className="col-md-4">
              <div className="header">
                <div className="icon icon-2">1</div>
                <h4>Type 1 Diabetes</h4>
              </div>
              <p>In type 1 diabetes, the body does not produce insulin. The body breaks down the carbohydrates you eat into blood sugar (blood glucose) that it uses for energy—and insulin is a hormone that the body needs to get glucose from the bloodstream into the cells of the body.</p>
            </div>
            <div className="col-md-4">
              <div className="header">
                <div className="icon icon-3">2</div>
                <h4>Type 2 Diabetes</h4>
              </div>
              <p>Type 2 diabetes is the most common form of diabetes - and it means that your body doesn’t use insulin properly. And while some people can control their blood sugar levels with healthy eating and exercise, others may need medication or insulin to help manage it.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="ai">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={Doctor_1} alt="Diabetes app" />
            </div>
            <div className="col-md-6">
              <h1>Our Artificial Intelligence Powered Solution</h1>
              <p className="mt-3 mb-4">AI is transforming the practice of medicine. It’s helping doctors diagnose patients more accurately, make predictions about patients’ future health, and recommend better treatments.<br/>In this solution, we trained a machine learning algorithm to generate patterns from diabetes related dataset to be able to predict how liable a patient is to having diabetes.</p>
              <Link to="/test">
                <button className="btn">Try it out</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="read-more">
        <div className="container">
          <h3 class="title">Read More of Our Articles</h3>
          <div className="row">
            <div className="col-lg-6 mb-5 best-foods">
              <Link to="/articles/diabetes-diet">
                <img src={Plant_1} alt="Diabetes app" />
                <h3 className="mt-3">Diabetes Diet: The Best Foods for Diabetes and More</h3>
                <p>When you’re managing diabetes and prediabetes, your eating plan is a powerful tool.But figuring out what to eat can feel like a hassle, right? Well, it doesn't have to because there are easy things you can do to add flavor to your daily routine—including healthy twists on your favorite foods.</p>
                <p>One key to feeling your best lies in the food you eat. You can start by working with a registered dietitian nutritionist (RDN/RD) to make an eating plan that works for you.</p>
                <span>Read more</span>
              </Link>
            </div>
            
            <div className="col-lg-6 right-articles">
              <Link to="/articles/medication-and-treatment">
                <div className="single-article">
                  <img src={Article_1} alt="Diabetes app" />
                  <div className="content">
                    <h3 className="article-title">Medication and treatment</h3>
                    <span>Read more</span>
                  </div>
                </div>
              </Link>
              <Link to="/articles/weight-loss">
                <div className="single-article">
                  <img src={Article_2} alt="Diabetes app" />
                  <div className="content">
                    <h3 className="article-title">Healthy Living - Weight Loss</h3>
                    <span>Read more</span>
                  </div>
                </div>
              </Link>
              <Link to="/articles/prevention-of-diabetes">
                <div className="single-article">
                  <img src={Article_3} alt="Diabetes app" />
                  <div className="content">
                    <h3 className="article-title">Prevention of Diabetes</h3>
                    <span>Read more</span>
                  </div>
                </div>
              </Link>
              <Link to="/articles/fighting-diabetes-with-fitness">
                <div className="single-article">
                  <img src={Article_5} alt="Diabetes app" />
                  <div className="content">
                    <h3 className="article-title">Fighting Diabetes With Fitness</h3>
                    <span>Read more</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />

    </div>
  )
}

export default Home
