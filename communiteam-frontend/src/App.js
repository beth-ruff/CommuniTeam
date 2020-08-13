import React, { Component } from 'react';
import CategoriesContainer from './containers/CategoriesContainer';
import CategoryForm from './containers/CategoryForm';
import './App.css';

class App extends Component {

  render() {
    return (
      <>
        <div className="App">
          <h4>Add Category</h4>
          <CategoryForm />
          <h3>Community Event Categories</h3>
          <CategoriesContainer />
        </div>
      </>
    );
  }
}

export default App;
