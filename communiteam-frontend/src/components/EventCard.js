import React from 'react';

const EventCard = (props) =>
    
    <>
        <div className="event-card">
        <h4>{props.event.name}</h4>
        <p>Date: {props.event.date}</p>
        <p>Time: {props.event.time}</p>
        <p>Description: {props.event.description}</p>
        <button onClick={props.deleteEvent} id={props.event.id}>X</button>
        </div>
    </>

export default EventCard;