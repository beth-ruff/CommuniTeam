import React from 'react';

const EventCard = (props) =>
    
    <>
        <div className="jumbotron">
            <h2>{props.event.name}</h2>
            <p class="lead">
                <strong>Date:</strong> {props.event.date}<br></br>
                <strong>Time:</strong> {props.event.time}<br></br>
                <strong>Description:</strong> {props.event.description}<br></br>
            </p>
            <button class="btn btn-sm btn-primary" id={props.event.id} onClick={props.deleteEvent}>X</button>
        </div>
    </>

export default EventCard;