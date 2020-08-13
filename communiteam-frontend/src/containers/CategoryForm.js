import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCategory } from '../actions/categories';

class CategoryForm extends Component {
    state = {
        name: '',
        loading: false
    }

    handleChange = event => {
        console.log(event.target.value)
        this.setState({
            name: event.target.value 
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        const category = {name: this.state.name}
        this.props.addCategory(category)
        this.setState({
            name: '',
            loading: false
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.name} onChange={this.handleChange}></input>
                <input type="submit" />
            </form>
            </div>
        )
    }
}

export default connect(null, { addCategory })(CategoryForm);
