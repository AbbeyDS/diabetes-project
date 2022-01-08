import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mt-4">
            <h3>About App</h3>
            <p>DiabetesApp is a Machine Learning powered diagnoses tool to run a personal risk assessment on your diabetic tendencies. Discover your risk of becoming diabetic Now and Take better steps towards managing your health.</p>
          </div>
          <div className="col-md-4 mt-4">
            <h3>Menu</h3>
            <Link to='/'>Home</Link>
            <Link to='/test'>Take Test</Link>
            <a href='https://diabetes.org/diabetes' target="_blank">About Diabetes</a>
            <a href='https://diabetes.org' target="_blank">More Resources</a>
          </div>
          <div className="col-md-4 mt-4">
            <h3>Articles</h3>
            <Link to='/articles/diabetes-diet'>Diabetes Diet</Link>
            <Link to='/articles/medication-and-treatment'>Medication and Treatment</Link>
            <Link to='/articles/weight-loss'>Weight Loss</Link>
            <Link to='/articles/prevention-of-diabetes'>Prevention of Diabetes</Link>
            <Link to='/articles/fighting-diabetes-with-fitness'>Fighting Diabetes</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
