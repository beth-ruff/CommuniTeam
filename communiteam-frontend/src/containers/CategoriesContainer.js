import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCategories, deleteCategory } from '../actions/categories';
// import CategoryForm from './CategoryForm';
import CategoryCard from '../components/CategoryCard';

class CategoriesContainer extends Component {
  componentDidMount(){
    this.props.getCategories()
  }

  handleClick = event => {
    this.props.deleteCategory(event.target.id)
  }

//   render() {
//     const categories = this.props.categories.map((category, i) => <li key={i}>{category.name}
//     <button id={category.id} onClick={this.handleClick}>X</button>
//     </li> )

    render() {
        const categories = this.props.categories.map(category => <CategoryCard key={category.id} category={category} getCategories={this.props.getCategories} deleteCategory={this.props.deleteCategory} />)

    return (
        <>
            <hr />
                <div className="container">
                    {categories}
                </div>
            <hr />
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
