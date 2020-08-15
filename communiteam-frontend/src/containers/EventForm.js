import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addEvent } from '../actions/events';

class EventForm extends Component {
    state = {
        name: '',
        date: '',
        time: '',
        description: '',
        loading: false
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value 
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const event = {
            name: this.state.name, 
            date: this.state.date, 
            time: this.state.time, 
            description: this.state.description
        }
        this.props.addEvent(event)
        this.setState({
            name: '',
            date: '',
            time: '',
            description: '',
            loading: false
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                Event name: <input type="text" name="name" value={this.state.name} onChange={this.handleChange}></input><br></br><br></br>
                Date: <input type="date" name="date" value={this.state.date} onChange={this.handleChange}></input><br></br><br></br>
                Time: <input type="time" name="time" value={this.state.time} onChange={this.handleChange}></input><br></br><br></br>
                Description: <input type="text" name="description" value={this.state.description} onChange={this.handleChange}></input><br></br><br></br>
                <input type="submit" />
            </form>
            </div>
        )
    }
}

export default connect(null, { addEvent })(EventForm);
