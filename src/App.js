import React, { useState, useEffect } from "react";
// import { Switch, Route, Link } from "react-router-dom";
import './App.css';
import axios from "axios";
import * as yup from "yup";
import Form from "./Form";
import FormSchema from "./FormSchema";
import {ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";


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
  instructions: "",

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

        //Post, onChange, inputChange, checkboxChange, formSubmit//

// const postNewPizza = (newPizza) => {
//   axios
//   .post(dummyData, newPizza)
//   .then ((res) => {
//     setPizza([...pizza, res.data])
//     console.log(res)
//  })
//   .catch ((err) => {
//     console.log(err);
//   })
//   .finally(() => setFormValues(initialFormValues))
// };

const inputChange = event => {
  const { name, value } = event.target;
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
  
  setFormValues ({
    ...formValues,
    [name]: value,
  })
}

const onCheckBoxChange = event => {
  const {name, checked} = event.target;

  setFormValues ({
    ...formValues,
    [name]: checked,
    toppings: {
    ...formValues,
    [name]: checked,
    }
  })
}

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

useEffect(() => {
  FormSchema.isValid(formValues)
  .then (valid => {
    setDisabled(!valid);
  })
}, [formValues]);


                      //Return//

  return (
  <div>
    <header className="pizzaHeader">
      <h1>Lambda Eats</h1>
      <nav className="navigation">
        <a to="/">Home</a>
        <br></br>
        <a to="/">Help</a>
      </nav>
    </header>
  </div>
)
}
