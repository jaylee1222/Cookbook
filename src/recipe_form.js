import React from 'react';
import './App.css';
import firebase from './firebase.js';

var db = firebase.firestore()
document.title = "Save a Recipe";

class RecipeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {recipe_name: '',
                      describe: '',
                      recipe_cat: '',
                      prep_time: '',
                      quantity: '',
                      ingredient: '',
                      instructions: '',
                      attachments: '',
                      };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
      }
    
    handleSubmit(event) {
        event.preventDefault();
        const recipeRef = db.collection("recipe");
        const item = { 
            Recipe_name: this.state.recipe_name,
            Prep_time: this.state.prep_time,
            Recipe_description: this.state.describe,
            food_cat: this.state.recipe_cat,
            quantity: this.state.quantity,
            ingredient: this.state.ingredient,
            instructions: this.state.instructions,
            attachment: this.state.attachments
        }
        console.log(item)
        recipeRef.doc(this.state.recipe_name).set(item);
        console.log('A recipe was submitted: ' + this.state.value);
        this.setState({
            recipe_name: '',
            describe: '',
            recipe_cat: '',
            prep_time: '',
            quantity: '',
            ingredient: '',
            instructions: '',
            attachments: '',
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input name="recipe_name" type="text" value={this.state.recipe_name} onChange={this.handleChange}/>
                </label>
                <br></br>
                <label>
                    Description:
                    <input name="describe" type="text" value={this.state.describe} onChange={this.handleChange}/>
                </label>
                <br></br>
                <label>
                    Recipe Type:
                    <input name="recipe_cat" type="text" value={this.state.recipe_cat} onChange={this.handleChange}/>
                </label>
                <br></br>
                <label>
                    Preparation Time:
                    <input name="prep_time" type="text" value={this.state.prep_time} onChange={this.handleChange}/>
                </label>
                <br></br>
                <label>
                    How much of the ingredient?:
                    <input name="quantity" type="text" value={this.state.quantity} onChange={this.handleChange}/>
                </label>
                <br></br>
                <label>
                    Ingredient:
                    <input name="ingredient" type="text" value={this.state.ingredient} onChange={this.handleChange}/>
                </label>
                <br></br>
                <label>
                    Cooking steps:
                    <input name="instructions" type="text" value={this.state.instructions} onChange={this.handleChange}/>
                </label>
                <br></br>
                <label>
                    Photo:
                    <input name="attachments" type="text" value={this.state.attachments} onChange={this.handleChange}/>
                </label>
                <br></br>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}
export default RecipeForm;