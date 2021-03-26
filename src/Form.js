import React from "react";

export default function Form(props) {
    const {
       values,
       onSubmit,
       onInputChange,
       checkbox,
       onCheckboxChange,
       disabled,
       errors 
    } = props;

    const submitForm = (evt) => {
        evt. preventDefault();
        onSubmit();
    };

    return (
        <form className="pizza_container" onSubmit={submitForm}>
            <div className="welcome">
                <h1>Build Your Own Pizza</h1>

                {/* //INSERT IMAGE HERE// */}

            </div>

            <div className="pizza_header">
                <h2>Build Your Own Pizza</h2>
            </div>

            <div className="size_selection">
                <h3>Choice of Size</h3>
                <h4>Required</h4>
        
            <label>
                <select
                onChange={onInputChange}
                value={values.size}
                name="size"
                >
                    <option value="">-- Select a size --</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </select>
            </label>
            </div>

            <div className="sauce_selection">
                <h3>Choice of Sauce</h3>
                <h4>Required</h4>

            <div>
                <select
                onChange={onInputChange}
                value={values.sauce}
                name="sauce"
                >
                    <option value="">-- Select Sauce --</option>
                    <option value="original_red">Original Red</option>
                    <option value="garlic_ranch">Garlic Ranch</option>
                    <option value="bbq_sauce">BBQ Sauce</option>
                    <option value="spinach_alfredo">Spinach Alfredo</option>
                </select>    
            </div>    

                {/* //INSERT RADIO BUTTON INFO// */}

            </div>

            <div>
            <h3>AddToppings</h3>
            <h4>Choose up to 4</h4>
                <label>Pepperoni&nbsp;
                  <input 
                  name='pepperoni'
                  type='checkbox'
                  onChange={onCheckboxChange}
                  checked={values.toppings.pepperoni}
                  />
                </label>

                <label>Sausage&nbsp;
                  <input 
                  name='sausage'
                  type='checkbox'
                  onChange={onCheckboxChange}
                  checked={values.toppings.sausage}
                  />
                </label>

                <label>Canadian Bacon&nbsp;
                  <input 
                  name='canadian bacon'
                  type='checkbox'
                  onChange={onCheckboxChange}
                  checked={values.toppings.canadian_bacon}
                  />
                </label>

                <label>Spicy Italian Sausage&nbsp;
                  <input 
                  name='spicy italian sausage'
                  type='checkbox'
                  onChange={onCheckboxChange}
                  checked={values.toppings.spicy_italian_sausage}
                  />
                </label>

                <label>Grilled Chicken&nbsp;
                  <input 
                  name='grilled chicken'
                  type='checkbox'
                  onChange={onCheckboxChange}
                  checked={values.toppings.grilled_chicken}
                  />
                </label>

                <label>Onions&nbsp;
                  <input 
                  name='onions'
                  type='checkbox'
                  onChange={onCheckboxChange}
                  checked={values.onions}
                  />
                </label>

                <label>Green Pepper&nbsp;
                  <input 
                  name='green pepper'
                  type='checkbox'
                  onChange={onCheckboxChange}
                  checked={values.toppings.green_pepper}
                  />
                </label>

                <label>Diced Tomato&nbsp;
                  <input 
                  name='diced tomato'
                  type='checkbox'
                  onChange={onCheckboxChange}
                  checked={values.toppings.diced_tomato}
                  />
                </label>

                <label>Roasted Garlic&nbsp;
                  <input 
                  name='roasted garlic'
                  type='checkbox'
                  onChange={onCheckboxChange}
                  checked={values.toppings.roasted_garlic}
                  />
                </label>

                <label>Artichoke Hearts &nbsp;
                  <input 
                  name='artichoke hearts'
                  type='checkbox'
                  onChange={onCheckboxChange}
                  checked={values.toppings.artichoke_hearts}
                  />
                </label>

                <label>Three Cheese&nbsp;
                  <input 
                  name='three cheese'
                  type='checkbox'
                  onChange={onCheckboxChange}
                  checked={values.toppings.three_cheese}
                  />
                </label>

                <label>Pineapple&nbsp;
                  <input 
                  name='pineapple'
                  type='checkbox'
                  onChange={onCheckboxChange}
                  checked={values.toppings.pineapple}
                  />
                </label>

                <label>Extra Cheese&nbsp;
                  <input 
                  name='extra cheese'
                  type='checkbox'
                  onChange={onCheckboxChange}
                  checked={values.toppings.extra_cheese}
                  />
                </label>
            </div>

            <div className="special_instructions">
                <h3>Special Instructions</h3>
                <label>
                    Anything Else You'd Like To Add?&nbsp;
                    <input
                    value={values.instructions}
                    onChange={onInputChange}
                    name="instructions"
                    type="text"
                />
                </label>
            </div>
    <button disabled={disabled} id="myBTN" >Submit Your Order</button>
        </form>
    );
}