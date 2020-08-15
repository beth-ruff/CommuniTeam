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
        console.log(event.target.value)
        this.setState({
            name: event.target.value,
            date: event.target.value,
            time: event.target.value,
            description: event.target.value
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
                <input type="text" value={this.state.name} onChange={this.handleChange}></input><br></br><br></br>
                <input type="date" value={this.state.date} onChange={this.handleChange}></input><br></br><br></br>
                <input type="time" value={this.state.time} onChange={this.handleChange}></input><br></br><br></br>
                <input type="text" value={this.state.description} onChange={this.handleChange}></input><br></br><br></br>
                <input type="submit" />
            </form>
            </div>
        )
    }
}

export default connect(null, { addEvent })(EventForm);
