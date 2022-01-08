import React from 'react';

import { useHookstate } from '@hookstate/core';

import { testQuestion } from '../../services/store';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

import Age from './components/age';
import Weight from './components/weight';
import Bmi from './components/bmi';
import Glucose from './components/glucose';
import Insulin from './components/insulin';
import Blood from './components/blood';

const TakeTest = () => {

  const question = useHookstate(testQuestion);
  console.log(question.value)

  return (
    <div id="take-test">
      <Header />
      <div className="main">
        <h1 className="header">DIABETES TEST</h1>
        {
          question.value == 1 && <Age /> ||
          question.value == 2 && <Weight /> ||
          question.value == 3 && <Bmi /> ||
          question.value == 4 && <Glucose /> ||
          question.value == 5 && <Insulin /> ||
          question.value == 6 && <Blood /> ||
          question.value
          // question.value == 1 ? <Age /> :
          // question.value == 2 ? <Weight /> :
          // question.value == 3 ? <Bmi /> :
          // question.value == 4 ? <Glucose /> :
          // question.value == 5 ? <Insulin /> :
          // question.value == 6 ? <Blood /> : question.value
        }
      </div>
      <Footer />
    </div>
  )
}

export default TakeTest;
