import React, { Component } from 'react';
import CategoriesContainer from './containers/CategoriesContainer';
// import CategoryFormContainer from './containers/CategoryFormContainer';
import './App.css';

class App extends Component {

  render() {
    return (
      <>
        <div className="App">
          {/* <CategoryFormContainer /> */}
          <h3>Community Event Categories</h3>
          <CategoriesContainer />
        </div>
      </>
    );
  }
}

export default App;
