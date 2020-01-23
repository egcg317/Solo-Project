import React, { Component } from 'react';
import Recipe from './oneRecipe.jsx';

class Recipes extends Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
    };
  }

  componentDidMount() {
    fetch('/api/recipes')
      .then((response) => {
        return response.json();
      })
      .then((array) => {
        this.setState({ recipes: array });
      });
  }

  render() {
    const postRequest = () => {
      
      const name = document.getElementById('recipeName').value;
      const cooktime = document.getElementById('cooktime').value;
      const rating = document.getElementById('recipeRating').value;

      const newRecipe = {
        name,
        cooktime,
        rating,
      };

      // this.setState({
      //   recipes: newRecipe,
      // });

      fetch('/api/addRecipe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newRecipe),
      })

      .then((res) => {
        console.log(newRecipe)
      });

      fetch('/api/recipes')
      .then((response) => {
        return response.json();
      })
      .then((array) => {
        this.setState({ recipes: array });
      });
    };

    const recipeFeed = [];

    const { recipes } = this.state;
    for (let i = 0; i < recipes.length; i += 1) {
      const { name, cooktime, rating } = recipes[i];
      recipeFeed.push(<Recipe key={`recipe: ${i}`} name={name} time={cooktime} rating={rating} />);
    }
    document.getElementById('addRecipe').addEventListener('click', postRequest);
    
    console.log('state', recipes);
    return (
      <div id="list">
        {recipeFeed}
      </div>
    );
  }
}

export default Recipes;
