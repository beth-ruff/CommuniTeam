import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addEvent } from '../actions/events';
import { getCategories } from '../actions/categories';

class EventForm extends Component {
    state = {
        name: '',
        date: '',
        time: '',
        description: '',
        category_id: ''
    }
    componentDidMount(){
        this.props.getCategories();
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value 
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addEvent(this.state)
        const category_id = this.state.category_id
        this.setState({
            name: '',
            date: '',
            time: '',
            description: '',
            category_id: ''
        })
        this.props.history.push(`/categories/${category_id}/events`)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                Event name: <input type="text" name="name" value={this.state.name} onChange={this.handleChange}></input><br></br><br></br>
                Date: <input type="date" name="date" value={this.state.date} onChange={this.handleChange}></input><br></br><br></br>
                Time: <input type="time" name="time" value={this.state.time} onChange={this.handleChange}></input><br></br><br></br>
                Description: <input type="text" name="description" value={this.state.description} onChange={this.handleChange}></input><br></br><br></br>
                Select an Event Category: <select name='category_id' value={this.state.category_id} onChange={this.handleChange}>
                <option disabled selected value> -- select an option -- </option>
                {this.props.categories.map((category) => <option key={category.id} value={category.id}>{category.name}</option>)}
              </select>
                <input type="submit" />
            </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.categoriesReducer.categories 
    }
}
export default connect(mapStateToProps, { addEvent, getCategories })(EventForm);
