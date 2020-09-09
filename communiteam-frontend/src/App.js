import React, { Component } from 'react';
import CategoriesContainer from './containers/CategoriesContainer';
// import CategoryFormContainer from './containers/CategoryFormContainer';
import './App.css';

class App extends Component {

  //arrow functions bind their this keyword inside of them to the context in which the function is written
  //in this case, inside of an instance of the app component 
  //classic functions bind their this keyword to the context in which they're executed 
  //in other words, their this keyword is defined when they're invoked 
  //in this case, the this keyword would be the button, because that's where the function was invoked 

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
