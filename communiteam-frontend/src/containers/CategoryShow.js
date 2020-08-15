import React from 'react';
import { connect } from 'react-redux';
import EventCard from '../components/EventCard';
import { showCategory } from '../actions/categories';
import { deleteEvent } from '../actions/events';
import EventForm from './EventForm';

class CategoryShow extends React.Component {
    componentDidMount(){
        this.props.showCategory(this.props.match.params.id)
    }

    handleDelete = event => {
        this.props.deleteEvent(event.target.id)
      }

    render() {
        let events = []
        if (this.props.category.events){
            events = this.props.category.events.map(event => <EventCard key={event.id} event={event} category={this.props.category} deleteEvent={this.handleDelete}/>)
        }
    return (
        <>
            <hr />
                <h4>Add Event</h4>
                < EventForm />
                <div className="category-show">
                    {this.props.category.loadingCategory ? <h5>Loading......</h5> : events}
                </div>
            <hr />
        </>
        )
    }
}

const mapStateToProps = state => {
    return {
        category: state.categoriesReducer.category,
        loadingCategory: state.categoriesReducer.loading
    }
}


export default connect(mapStateToProps, { showCategory, deleteEvent })(CategoryShow);