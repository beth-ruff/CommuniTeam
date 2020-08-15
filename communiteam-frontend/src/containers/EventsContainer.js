import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEvents, deleteEvent } from '../actions/events';
import EventCard from '../components/EventCard';

class EventsContainer extends Component  {

    // componentDidMount(){
    //     this.props.getEvents()
    // }
      
        handleDelete = e => {
          this.props.deleteEvent(e.target.id)
        }
      
          render() {
              const events = this.props.events.map(event => <EventCard key={event.id} event={event} getEvents={this.props.getEvents} deleteEvent={this.handleEvent} />)
      
          return (
              <>
                  <hr />
                      <div className="event-container">
                          {events}
                      </div>
                  <hr />
              </>
          );
          }
      }
      
      const mapStateToProps = state => {
          debugger
        return {
          events: state.eventsReducer.events,
          loading: state.eventsReducer.loading
        }
      }

export default connect(mapStateToProps, { getEvents, deleteEvent })(EventsContainer);