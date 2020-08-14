import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard  = (props) =>
    
    <div>
        <Link to="/events" >
        <div className="category-card">
                <p>{props.category.loading ? <h5>Loading......</h5> : props.category.name}</p>
                <button onClick={props.deleteCategory} id={props.category.id}>X</button>
        </div>
        </Link>
    </div>

export default CategoryCard;