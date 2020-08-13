import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCategories, deleteCategory } from '../actions/categories';
import CategoryForm from './CategoryForm';

class CategoriesContainer extends Component {
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
        <>
        <CategoryForm />
        <ul>
            {this.props.loading ? <h5>Loading......</h5> : categories}
        </ul>
        </>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categoriesReducer.categories,
    loading: state.categoriesReducer.loading,
  }
}

export default connect(mapStateToProps, { getCategories, deleteCategory })(CategoriesContainer);
