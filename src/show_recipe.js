import React from 'react';
import './App.css';
import firebase from './firebase.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Recipe from './indy_recipe';

document.title = "Family Recipes";

export default class AppShow extends React.Component {

    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('recipe');

        this.state={
        dataSource : []
      }
      }
      
      componentDidMount(){
        this.unsubscribe = this.ref.onSnapshot(this.latestComments);
      }
      
      
      
      latestComments = (commentsSnapShot) =>{
        const Recipe = [];
        commentsSnapShot.forEach((doc) => {
        const {Recipe_name, Recipe_description, Prep_time, food_cats} = doc.data();
          Recipe.push({
            key: doc.id,
            Recipe_name,
            Recipe_description,
            Prep_time,
            food_cats
          });
        });
        this.setState({
          dataSource : Recipe,
        });
      }
      
      
      
      
        render(){
           const {dataSource} = this.state
          return(
            
                <div>
                  {dataSource.map(function(object, i){
                    return <div key={i}>
                     <Router> <button key={i}><Link to={`/recipes/${i + 1}`}>{[object.Recipe_name]}</Link></button> </Router>
                      <p>{[object.Prep_time]}</p><p>{[object.Recipe_description]}</p>
                      
                      <br></br>
                    </div>
                  })}
                </div>
           
          )
        }
}