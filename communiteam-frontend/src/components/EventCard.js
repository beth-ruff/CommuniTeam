import React from 'react';

const EventCard = (props) =>
    
    <>
        <div className="event-card">
            <h4>{props.event.name}</h4>
                <p>Date: {props.event.date}</p>
                <p>Time: {props.event.time}</p>
                <p>Description: {props.event.description}</p>
            <button id={props.event.id} onClick={props.deleteEvent}>X</button>
        </div>
    </>

export default EventCard;