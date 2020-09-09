import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCategories, deleteCategory, addCategory } from '../actions/categories';
import CategoryCard from '../components/CategoryCard';
import CategoryForm from '../components/CategoryForm';
import { CardDeck } from 'react-bootstrap';
import '../CategoryCard.css';


class CategoriesContainer extends Component {
  state = {
    name: '',
    showForm: false
  }
  
  componentDidMount(){
    this.props.getCategories()

  }

  handleDelete = event => {
    this.props.deleteCategory(event.target.id)
  }

  handleClick = event => {
    console.log(event.target.value)
    this.setState({
        showForm: true
    });
}

  handleChange = event => {
      console.log(event.target.value)
      this.setState({
          [event.target.name]: event.target.value
      })
  }

  handleSubmit = event => {
      event.preventDefault();
      this.props.addCategory(this.state)
      this.setState({
          name: '',
          showForm: false
      })
  }

  render() {
        const categories = this.props.categories.map(category => <CategoryCard key={category.id} category={category} getCategories={this.props.getCategories} deleteCategory={this.handleDelete} />)
    return (
        <>
            <hr />
            <container>
              <CardDeck className="card-deck">
                {this.props.categories.loadingCategories ? <h5>Loading......</h5> : categories}
              </CardDeck >
            </container>
            <hr />
            <div className="category-form">
                {this.state.showForm === false ? <button onClick={this.handleClick}>Add a Category</button> : <CategoryForm handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>}
            </div>
            
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

// const mDTP = (dispatch) => {
//   return {
//     dispatchGetCategories: () => dispatch(getCategories())
//   }
// }

// Connect is the Consumer in the React context
export default connect(mapStateToProps, { getCategories, deleteCategory, addCategory })(CategoriesContainer);
