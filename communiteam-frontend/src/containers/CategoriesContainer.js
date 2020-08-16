import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCategories, deleteCategory } from '../actions/categories';
import CategoryCard from '../components/CategoryCard';


class CategoriesContainer extends Component {
  componentDidMount(){
    this.props.getCategories()

  }

  handleDelete = event => {
    this.props.deleteCategory(event.target.id)
  }

    render() {
        const categories = this.props.categories.map(category => <CategoryCard key={category.id} category={category} getCategories={this.props.getCategories} deleteCategory={this.handleDelete} />)

    return (
        <>
            <hr />
                <div className="container">
                {this.props.categories.loadingCategories ? <h5>Loading......</h5> : categories}
                </div>
            <hr />
        </>
    );
    }
}

const mapStateToProps = state => {
  return {
    categories: state.categoriesReducer.categories,
    loadingCategories: state.categoriesReducer.loading,
  }
}

export default connect(mapStateToProps, { getCategories, deleteCategory })(CategoriesContainer);
