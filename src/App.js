import React, { useState } from 'react';
import Header from './header';
import Cake from './step';
import Footer from './footer';

const cake = [
  {
    id : 1,
    name : 'Blueberry',
    ingradients : 'Egg, cream, bred and machines',
    price : 25,
    photo : './menu_assets/blueberry.jpg'
  },
  {
    id : 2,
    name : 'Butterscotch',
    ingradients : 'Egg, cream, bred and machines',
    price : 20,
    photo : './menu_assets/butterscotch.jpg'
  },
  {
    id : 3,
    name : 'Chocolate',
    ingradients : 'Egg, cream, bred and machines',
    price : 22,
    photo : './menu_assets/chocolate.jpg'
  },
  {
    id : 4,
    name : 'Fruit-overload',
    ingradients : 'Egg, cream, bred and machines',
    price : 29,
    photo : './menu_assets/fruit-overload.jpg'
  },
  {
    id : 5,
    name : 'fudge',
    ingradients : 'Egg, cream, bred and machines',
    price : 19,
    photo : './menu_assets/fudge.jpg'
  },
  {
    id : 6,
    name : 'Pineapple',
    ingradients : 'Egg, cream, bred and machines',
    price : 15,
    photo : './menu_assets/pineapple.jpg'
  },
];

 const App = () => {
    const [step, setStep] = useState(1);
  
    function handlePrevious(){
      if(step > 1)
      setStep(step - 1);
    };

     function handleNext(){
      if(step < 6)
      setStep(step + 1);
    };

    return (

    <div className = 'container'>
      <Header/>
        <div className = 'step-menu'>

          <div className = 'step'>
            <Cake
              name = {cake[step-1].name}
              photo = {cake[step-1].photo}
              ingradients = {cake[step-1].ingradients}
              price = {cake[step-1].price} 
            />
          </div>
          
        </div>
            <div className = 'number'>

              <button className = 'btn' onClick ={handlePrevious}>
                  Previous
              </button>

                <div className = {step >= 1 ? 'active' : ''}>1</div>
                <div className = {step >= 2 ? 'active' : ''}>2</div>
                <div className = {step >= 3 ? 'active' : ''}>3</div>
                <div className = {step >= 4 ? 'active' : ''}>4</div>
                <div className = {step >= 5 ? 'active' : ''}>5</div>
                <div className = {step >= 6 ? 'active' : ''}>6</div>
              

                <button className = 'btn' onClick ={handleNext}>
                  Next
                </button>
            </div>
            <Footer/>
     </div>
    );
 };

 export default App;
     