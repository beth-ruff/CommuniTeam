import React from 'react';
import { Link } from 'react-router-dom';
// import CategoryShow from './CategoryShow';

const CategoryCard  = (props) =>

    <div>
    
        
        <div className="category-card">
            <Link key={props.category.id} to={`/categories/${props.category.id}/events`}>
                <h3>{props.category.name}</h3>
            </Link>
            <button onClick={props.deleteCategory} id={props.category.id}>X</button>
        </div>
        
        
    </div>

export default CategoryCard;