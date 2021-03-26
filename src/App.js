import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import './App.css';
import axios from "axios";
import * as yup from "yup";
import Form from "./Form";
import FormSchema from "./FormSchema";
import Home from './Home'



                      //Initial Form Values//
const initialFormValues = {
  //dropdown
  size: "",

  //radio buttons
  sauce: {
    original_red: false,
    garlic_ranch: false,
    bbq_sauce: false,
    spinach_alfredo: false,
  },
  //checkboxes
  toppings: {
    pepperoni: false,
    sausage: false,
    canadian_bacon: false,
    spicy_italian_sausage: false,
    grilled_chicken: false,
    onion: false,
    green_peppers: false,
    diced_tomatoes: false,
    black_olives: false,
    roasted_garlic: false,
    artichoke_hearts: false,
    three_cheese: false,
    pineapple: false,
    extra_cheese: false,
  },
   //text inputs
   instructions: "",  
};

const initialFormErrors = {
  size: "",

};

const initialPizza = []
const initialDisabled = true;

                    //Set State//

export default function App () {
const [pizza, setPizza] = useState(initialPizza);
const [formValues, setFormValues] = useState(initialFormValues);
const [formErrors, setFormErrors] = useState(initialFormErrors);
const [disabled, setDisabled] = useState(initialDisabled);
const [newPizza, setNewPizza] = useState([]);


//Test set up//

const test = (name, value) => {
  yup
   .reach(FormSchema, name)
   .validate(value)
   .then (() => {
     setFormErrors({
       ...formErrors,
       [name]: ""
     })
   })
   .catch((err) => {
     setFormErrors ({
       ...formErrors,
       [name]: err.errors[0],
     })
   })
  }

   //Input change//
   
const inputChange = event => {
  const {name, value} = event.target;
    test(name, value)
    setFormValues({
      ...formValues,
      [name]: value
  })
}
  
// Checkbox Change//

const onCheckBoxChange = event => {
  const {name, checked} = event.target;
  setFormValues ({
    ...formValues,
    toppings: {
    ...formValues,
    [name]: checked,
    }
  })
}

//Submit the form//

const formSubmit = (e) => {
  e.preventDefault ();
const newPizza = {
  size: formValues.size,
  sauce: formValues.sauce,
  toppings: formValues.toppings,
  instructions: formValues.instructions.trim(),
};
setNewPizza(newPizza);
}

//useEffect//

useEffect(() => {
  console.log(formValues)
}, [formValues])

useEffect(() => {
  FormSchema.isValid(formValues)
  .then (valid => {
    setDisabled(!valid);
  })
}, [formValues]);

//Return//

  return (
    <div className="pizzaHeader">
      <h1>Lambda Eats</h1>
      <nav>
        <div className="navigation">
          <Link to='/form' id='orderForm'>Order Now!</Link>
          <Link to='/help' id='help'>Help</Link>
          <Link to='/' id='home'>Home</Link>
      </div>
      </nav>
  

      <Switch>
        <Route path='/help'>
          <h1>Craving Pizza? Let us help!</h1>
        </Route>
        <Route path='/form'>
        <Form 
          values={formValues}
          onInputChange={inputChange}
          checkbox={onCheckBoxChange}
          onSubmit={formSubmit}
          disabled={disabled}
          errors={formErrors}
          />
      </Route>
        </Switch>
    

      <div>
      <h2>Your Favorite Pizza Delivered While Coding</h2>
      <img className="pizza" img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-homemade-pizza-horizontal-1542312378.png" alt="pizza"></img>
        
       
    </div> 
    </div> 
)
  }