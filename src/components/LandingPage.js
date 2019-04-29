import React from 'react';
import './LandingPage.css';
import './typewriter';
import data from '../data';

//let text = [...data.title];

//console.log(data);

const LandingPage = () => {
  return (
    <div className="showcase">
      <div class="row">
        <div class="col s12 m10 offset-m1">
          <h1>
            Fresh
            <span
              className="typewrite"
              data-period="2000"
              data-type='[ "Roast Chicken", "Cajun Chicken Pasta", "Chicken Parmigian", "Chicken Tortilla Soup", "Broccoli Cheese Soup", "Chicken and Dumplings", "Braised Balsamic Chicken", "Ranch Style Chicken" ]'
            />
          </h1>
          <h4>Natural products and diets</h4>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
