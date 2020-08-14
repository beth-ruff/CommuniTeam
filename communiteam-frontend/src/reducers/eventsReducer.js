export default (state = { events: [], loading: false }, action) => {
    switch (action.type) {

        case 'LOADING_EVENTS':
            return {
                ...state,
                loading: true 
            }

        case 'EVENTS_LOADED':
            return {
                ...state,
                events: action.payload,
                loading: false
            }

        case 'ADDING_EVENT':
            return {
                ...state,
                loading: true
            }

        case 'EVENT_ADDED':
            return {
                ...state,
                events: [...state.events, action.payload],
                loading: false 
            }

        case 'DELETING_EVENT':
            return {
                ...state,
                loading: true
            }
    
        case 'EVENT_DELETED':
            return {
                ...state,
                events: [...state.events.filter(event => `${event.id}` !== action.payload)],
                loading: false 
            }

        default:
            return state
    }
}