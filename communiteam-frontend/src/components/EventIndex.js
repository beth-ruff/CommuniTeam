import React from 'react';

const EventIndex = (props) =>
    
    <div>
        <div className="event-card">
                <p>{props.event.loading ? <h5>Loading......</h5> : props.event.name}</p>
                <button onClick={props.deleteEvent} id={props.event.id}>X</button>
        </div>
    </div>

export default EventIndex;