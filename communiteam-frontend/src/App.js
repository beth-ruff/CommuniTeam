import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCategories, deleteCategory } from './actions/categories';
import CategoryForm from './containers/CategoryForm';
import './App.css';

class App extends Component {
  componentDidMount(){
    this.props.getCategories()
  }

  handleClick = event => {
    this.props.deleteCategory(event.target.id)
  }

  render() {
    const categories = this.props.categories.map((category, i) => <li key={i}>{category.name}
    <button id={category.id} onClick={this.handleClick}>X</button>
    </li> )

    return (
      <div className="App">
        <h4>Add Category</h4>
        <CategoryForm />
        <h3>Community Event Categories</h3>
        <ul>
          {this.props.loading ? <h5>Loading......</h5> : categories}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categoriesReducer.categories,
    loading: state.categoriesReducer.loading,
  }
}

export default connect(mapStateToProps, { getCategories, deleteCategory })(App);
