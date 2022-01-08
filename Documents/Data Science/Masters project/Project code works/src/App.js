import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/home/home';
import Test from './pages/test/test';
import TakeTest from './pages/take_test/take_test';
import TestResult from './pages/test_result/test_result';

import Article from './pages/articles/article';
import Diet from './pages/articles/diet';
import Medication from './pages/articles/medication';
import Weight from './pages/articles/weight';
import Prevention from './pages/articles/prevention';
import Fitness from './pages/articles/fitness';

import './assets/css/app.css';

const App = () => {

  return (
    <Router>
      <div className="app">
        <Route path="/" exact component={Home} />
        <Route path="/test" exact component={Test} />
        <Route path="/take-test" exact component={TakeTest} />
        <Route path="/test-result" exact component={TestResult} />

        <Route path="/article" exact component={Article} />
        <Route path="/articles/diabetes-diet" exact component={Diet} />
        <Route path="/articles/medication-and-treatment" exact component={Medication} />
        <Route path="/articles/weight-loss" exact component={Weight} />
        <Route path="/articles/prevention-of-diabetes" exact component={Prevention} />
        <Route path="/articles/fighting-diabetes-with-fitness" exact component={Fitness} />
      </div>
    </Router>
  );

}

export default App;
