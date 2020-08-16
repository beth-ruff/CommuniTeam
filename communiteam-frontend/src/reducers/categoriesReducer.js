export default (state = { categories: [], category: [], loading: false }, action) => {
    switch (action.type) {

        case 'LOADING_CATEGORIES':
            return {
                ...state,
                loading: true 
            }

        case 'CATEGORIES_LOADED':
            return {
                ...state,
                categories: action.payload,
                loading: false
            }

        case 'ADDING_CATEGORY':
            return {
                ...state,
                loading: true
            }

        case 'CATEGORY_ADDED':
            return {
                ...state,
                categories: [...state.categories, action.payload],
                loading: false 
            }

        case 'DELETING_CATEGORY':
            return {
                ...state,
                loading: true
            }
    
        case 'CATEGORY_DELETED':
            return {
                ...state,
                categories: [...state.categories.filter(category => `${category.id}` !== action.payload)],
                loading: false 
            }

        case 'LOADING_CATEGORY':
            return {
                ...state,
                loading: true 
        }
        
        case 'SHOW_CATEGORY':
            return {
                ...state, 
                category: action.payload, 
                loading: false
            }

        default:
            return state
    }

    
}