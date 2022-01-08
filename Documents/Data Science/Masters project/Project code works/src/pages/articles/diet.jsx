import React from 'react';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

import Banner_1 from '../../assets/images/articles/banner-1.png';
import Foods from '../../assets/images/articles/foods.jpg';
import Method from '../../assets/images/articles/plate-method.jpg';
import Method2 from '../../assets/images/articles/method-2.png';
import Method3 from '../../assets/images/articles/method-3.png';
import Method4 from '../../assets/images/articles/method-4.png';
import Method5 from '../../assets/images/articles/method-5.png';
import Combination from '../../assets/images/articles/combination.png';

import Col1 from '../../assets/images/articles/food-row-1.jpg';
import Col2 from '../../assets/images/articles/food-row-2.jpg';
import Col3 from '../../assets/images/articles/food-row-3.jpg';

// import Calcium from '../../assets/images/articles/calcium.png';
import Calcium from '../../assets/images/articles/calcium-2.jpg';

const Diet = () => {
  return (
    <div id="diet" class="articles">
      
      <Header />

      <div className="main">
        <div className="container">
          <h1>Diabetes Diet: The Best Foods For Diabetes And More</h1>
          <p className="first-paragraph">When you’re managing diabetes and prediabetes, your eating plan is a powerful tool. But figuring out what to eat can feel like a hassle, right? Well, it doesn't have to because there are easy things you can do to add flavor to your daily routine—including healthy twists on your favorite foods.</p>
          <p>One key to feeling your best lies in the food you eat. You can start by working with a registered dietitian nutritionist (RDN/RD) to make an eating plan that works for you. In it, be sure to include the foods you like—and don’t be afraid to try something new</p>
          <p>Most importantly, remember that eating well—and adding activity to your daily routine by moving more—are important ways you can manage diabetes. And we’re here to help you every step of the way.</p>
        </div>

        <img src={Banner_1} alt="Diabetes app" className='banner' />

        <div className="container">
          
          <h4>What Does Science Say?</h4>

          <div className="row">
            <div className="col-md-6">
              <p>"What can I eat?" is one of the top questions asked by people with diabetes when they are diagnosed—and our goal is to help answer that question.</p>
              <p>A panel of scientists, doctors, endocrinologists, diabetes educators and dietitians reviewed over 600 research articles over the course of five years to see what diets—or eating patterns—work well for people with diabetes. The results were published in our Nutrition Consensus Report.</p>
              <p>The main finding? Everyone's body responds differently to different types of foods and diets, so there is no single "magic" diet for diabetes. But you can follow a few simple guidelines to find out what works for you to help manage your blood sugar.</p>
            </div>
            <div className="col-md-6 img-right">
              <img src={Foods} alt="Image" />
            </div>
          </div>
          
          <h4>Introducing the Diabetes Plate Method</h4>

          <div className="row">
            <div className="col-md-6 img-left">
              <img src={Method} alt="Image" />
            </div>
            <div className="col-md-6">
              <p>No matter which eating pattern works best for you, it can still be hard to know where to start when it comes to building healthy meals that help you manage your blood sugar—while still being tasty.</p>
              <p>That’s where the Diabetes Plate Method comes in. Using this method, you can create perfectly portioned meals with a healthy balance of vegetables, protein and carbohydrates—without any counting, calculating, weighing or measuring.</p>
            </div>
          </div>

          <h4>What is the Diabetes Plate Method?</h4>
          <p>The Diabetes Plate Method is the easiest way to create healthy meals that can help manage blood sugar. Using this method, you can create perfectly portioned meals with a healthy balance of vegetables, protein, and carbohydrates—without any counting, calculating, weighing, or measuring. All you need is a plate!</p>
          <p>To start out, you need a plate that is not too big. The size of our plate usually determines the size of our portions, so you want to start with a reasonably sized plate—we recommend about 9 inches across.</p>
          <p>If your dinner plates are larger than this, try using a smaller salad or dessert plate for your meals. Or, if your dinner plates have a lip or artwork inside the edge, use that as a border for filling your plate.</p>
          <p>Now that you have the right plate, it’s time to fill it! Imagine two lines drawn on your plate breaking it up into three sections:</p>

          <h4 className='mt-5'>1. Fill half your plate with nonstarchy vegetables.</h4>
          <div className="row">
            <div className="col-md-6">
              <p>Nonstarchy vegetables are lower in carbohydrate, so they do not raise blood sugar very much. They are also high in vitamins, minerals, and fiber, making them an important part of a healthy diet. Filling half your plate with nonstarchy vegetables means you will get plenty of servings of these superfoods.</p>
            </div>
            <div className="col-md-6 img-right">
              <img src={Method2} alt="Image" />
            </div>
          </div>
          <h4>Examples of Nonstarchy vegetables</h4>
          <ul>
            <li>Asparagus</li>
            <li>Broccoli or Cauliflower</li>
            <li>Brussels Sprouts</li>
            <li>Cabbage (green, red, napa, bok choy, chinese)</li>
            <li>Carrots</li>
            <li>Celery</li>
            <li>Cucumber</li>
            <li>Eggplant</li>
            <li>Leafy greens such as kale, collards, mustard greens, or Swiss Chard</li>
            <li>Mushrooms</li>
            <li>Okra</li>
            <li>Green beans, pea pods, snow peas, and sugar snap peas</li>
            <li>Peppers such as bell peppers and hot peppers</li>
            <li>Salad greens such as lettuce, spinach, arugula, endive, and other salad mixes</li>
            <li>Squash such as zucchini, yellow squash, chayote, spaghetti squash</li>
            <li>Tomatoes</li>
          </ul>

          <h4 className='mt-5'>2. Fill one quarter of your plate with lean protein foods</h4>
          <div className="row">
            <div className="col-md-6">
              <p>Foods high in protein such as fish, chicken, lean beef, soy products, and cheese are all considered “protein foods.”</p>
              <p>Proteins foods (especially those from animal sources) usually contain saturated fat, which may increase your risk of heart disease. Lean proteins are lower in fat and saturated fat, making them a healthier choice.</p>
              <p>Keep in mind that some plant-based protein foods (like beans and legumes) are also high in carbohydrates.</p>
            </div>
            <div className="col-md-6 img-right">
              <img src={Method3} alt="Image" />
            </div>
          </div>
          <h4>Examples of lean protein foods include:</h4>
          <ul>
            <li>Chicken, turkey, and eggs</li>
            <li>Fish like salmon, cod, tuna, tilapia, or swordfish</li>
            <li>Shellfish like shrimp, scallops, clams, mussels, or lobster</li>
            <li>Lean beef cuts such as chuck, round, sirloin, flank, or tenderloin</li>
            <li>Lean pork cuts such as center loin chop or tenderloin</li>
            <li>Lean deli meats</li>
            <li>Cheese and cottage cheese</li>

            <p className='mt-4'>Plant-based sources of protein:</p>

            <li>Beans, lentils, hummus, and falafel</li>
            <li>Nuts and nut butters</li>
            <li>Edamame</li>
            <li>Tofu and tempeh</li>
            <li>Plant-based meat substitutes</li>
          </ul>

          <h4 className='mt-5'>3. Fill one quarter of your plate with carbohydrate foods</h4>
          <div className="row">
            <div className="col-md-6">
              <p>Foods that are higher in carbohydrate include grains, starchy vegetables, beans and legumes, fruit, yogurt, and milk. These foods have the greatest effect on blood sugar.</p>
              <p>Limiting your portion of carbohydrate foods to one quarter of your plate can help keep blood sugars from rising too high after meals.</p>
            </div>
            <div className="col-md-6 img-right">
              <img src={Method4} alt="Image" />
            </div>
          </div>
          <h4>Examples of carbohydrate foods:</h4>
          <ul>
            <li>Whole grains such as brown rice, bulgur, oats/oatmeal, polenta, popcorn, quinoa, and whole grain products (bread, pasta, tortillas)</li>
            <li>Starchy vegetables such as acorn squash, butternut squash, green peas, parsnips, plantain, potato, pumpkin, and sweet potato/yam</li>
            <li>Beans and legumes such as black, kidney, pinto, and garbanzo beans</li>
            <li>Fruits and dried fruit</li>
            <li>Dairy products like milk, yogurt, and milk substitutes (i.e. soy milk)</li>
          </ul>

          <h4 className='mt-5'>5. Choose water or a low-calorie drink</h4>
          <div className="row">
            <div className="col-md-6">
              <p>Water is the best choice because it contains no calories or carbohydrates and has no effect on blood sugar. Other zero- or low-calorie drink options include:</p>
            </div>
            <div className="col-md-6 img-right">
              <img src={Method5} alt="Image" />
            </div>
          </div>
          <ul>
            <li>Unsweetened tea (hot or iced)</li>
            <li>Unsweetened coffee (hot or iced)</li>
            <li>Sparkling water/club soda</li>
            <li>Flavored water or sparkling water without added sugar</li>
            <li>Diet soda or other diet drinks</li>
          </ul>

          <h4 className='mt-5'>What about combination foods?</h4>
          <p>Our meals don’t always fit neatly into the sections of the plate. Many dishes combine the different food types together, like soups, casseroles, sandwiches, pizza, pasta, etc.</p>
          <p>You can still use the plate method when preparing and portioning combination foods. Just identify the different foods in the dish and think about where they would fit in the plate.</p>
          <p>For example, in a slice of pizza, the crust would be the carbohydrate food, the cheese and any meats on top would be the protein foods, and the tomato sauce and any vegetables on top would be the nonstarchy vegetables.</p>
          <div className="row">
            <div className="col-md-6">
              <p>Try to prepare combination dishes with the same proportions as the plate. So, to build a pizza using the plate method, choose thin crust to reduce the portion of carbohydrates and top it with lots of vegetables instead of meat (or choose a lean meat). Stick to just 1 or 2 slices and serve with a side salad so that half your meal is nonstarchy vegetables.</p>
            </div>
            <div className="col-md-6 img-right">
              <img src={Combination} alt="Image" />
            </div>
          </div>

          <h4 className='mt-5'>What you need to know about nutrients</h4>
          <p>Now that you’ve got the basics, let’s dive into nutrients.</p>
          <p>First things first: do you use food labels for products that you buy in the store? The food labels on packaging can be a great place to find information about the nutrients in the food you’re purchasing.</p>

          <div className="row mt-5">
            <div className="col-md-4">
              <img src={Col1} alt="Image" />
            </div>
            <div className="col-md-4">
              <img src={Col2} alt="Image" />
            </div>
            <div className="col-md-4">
              <img src={Col3} alt="Image" />
            </div>
          </div>

          <h4 className='mt-5'>Carbs, carbs, carbs—what about them?</h4>

          <p>When it comes to managing diabetes, the carbohydrates, or carbs, you eat play an important role. They impact your blood sugar, so remember that balance is key!</p>
          <p>There are three main types of carbohydrates in food—starches, sugar and fiber. As you’ll see on the nutrition labels for the food you buy, the term “total carbohydrate” refers to all three of these types.</p>
          <p>When it comes to choosing foods with carbs, the goal is to choose carbs that are nutrient-dense, which means they are rich in fiber, vitamins and minerals, and low in added sugars, sodium and unhealthy fats.</p>

          <h4 className="mt-5">How Is calcium connected to aging, diabetes, hypoglycemia, and falls?</h4>
          <div className="row mt-5">
            <div className="col-md-6">
              <p>Calcium is the most abundant mineral in your body and makes up a lot of your bones and teeth. It keeps your bones and teeth strong and supports your body’s overall structure.</p>
              <p>Calcium is also used to help your muscles move, helps with blood circulation, and your nerves to transmit messages throughout your body.</p>
              <p>The other nutrient to know when thinking about calcium is vitamin D. Vitamin D is used to absorb calcium, so without it, it can lead to not getting sufficient amounts of calcium. Also, as we get older, our bodies aren’t as efficient in absorbing calcium.</p>
            </div>
            <div className="col-md-6 img-right">
              <img src={Calcium} alt="Image" />
            </div>
          </div>
          
        </div>
      </div>

      <Footer />

    </div>
  )
}

export default Diet
