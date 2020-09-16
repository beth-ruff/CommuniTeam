import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addEvent } from '../actions/events';
import { getCategories } from '../actions/categories';
import { Form, Button } from 'react-bootstrap';
import '../CategoryCard.css';

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
        console.log(category_id)
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
            // <div>
            //     <form onSubmit={this.handleSubmit}>
            //     Event name: <input type="text" name="name" value={this.state.name} onChange={this.handleChange}></input><br></br><br></br>
            //     Date: <input type="date" name="date" value={this.state.date} onChange={this.handleChange}></input><br></br><br></br>
            //     Time: <input type="time" name="time" value={this.state.time} onChange={this.handleChange}></input><br></br><br></br>
            //     Description: <input type="text" name="description" value={this.state.description} onChange={this.handleChange}></input><br></br><br></br>
            //     Select an Event Category: <select name="category_id" value={this.state.category_id} onChange={this.handleChange}>
            //     <option> -- select an option -- </option>
            //     {this.props.categories.map((category) => <option key={category.id} value={category.id}>{category.name}</option>)}
            //   </select>
            //     <input type="submit" />
            // </form>
            // </div>
<div>
<Form className="event-form" onSubmit={this.handleSubmit}>
<Form.Group controlId="exampleForm.ControlInput1">
  <Form.Label>Event Name</Form.Label>
  <Form.Control type="text" name="name" value={this.state.name} onChange={this.handleChange} />
</Form.Group>
<Form.Group controlId="exampleForm.ControlInput2">
  <Form.Label>Date</Form.Label>
  <Form.Control type="date" name="date" value={this.state.date} onChange={this.handleChange} />
</Form.Group>
<Form.Group controlId="exampleForm.ControlInput3">
  <Form.Label>Time</Form.Label>
  <Form.Control type="time" name="time" value={this.state.time} onChange={this.handleChange} />
</Form.Group>
<Form.Group controlId="exampleForm.ControlInput4">
  <Form.Label>Description</Form.Label>
  <Form.Control as="textarea" rows="3" name="description" value={this.state.description} onChange={this.handleChange} />
</Form.Group>
<Form.Group controlId="exampleForm.ControlSelect1">
  <Form.Label>Select Event Category</Form.Label>
  <Form.Control as="select" name="category_id" value={this.state.category_id} onChange={this.handleChange}>
    {this.props.categories.map((category) => <option key={category.id} value={category.id}>{category.name}</option>)}
  </Form.Control>
</Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
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
