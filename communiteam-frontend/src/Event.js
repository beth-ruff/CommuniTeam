import React, { Component } from 'react';
import EventsContainer from './containers/EventsContainer';
// import EventForm from './containers/CategoryForm';
import './App.css';

class Event extends Component {

  render() {
    return (
      <>
        <div className="App">
          <h4>Add Event</h4>
          <h3>Events</h3>
          <EventsContainer />
        </div>
      </>
    );
  }
}

export default Event;