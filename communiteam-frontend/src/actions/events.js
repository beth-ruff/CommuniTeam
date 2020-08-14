export const getEvents = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_EVENTS'})
        return fetch('/events')
        .then(resp => resp.json())
        .then(events => dispatch({type: 'EVENTS_LOADED', payload: events}))
    }
}

export const addEvent = (event) => {
    return (dispatch) => {
        dispatch({type: 'ADDING_EVENT'})
        fetch('/events', {
            method: 'POST',
            body: JSON.stringify(event),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(event => dispatch({type: 'EVENT_ADDED', payload: event}))
    }
}

export const deleteEvent = (id) => {
    return (dispatch) => {
        dispatch({type: 'DELETING_EVENT'})
        fetch(`/events/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(() => dispatch({type: 'EVENT_DELETED', payload: id}))
    }
}