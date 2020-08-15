import React from 'react';
import { Link } from 'react-router-dom';
// import CategoryShow from './CategoryShow';

const CategoryCard  = (props) =>

    <div>
    
        <Link key={props.category.id} to={`/categories/${props.category.id}`}>
        <div className="category-card">
                <h3>{props.category.name}</h3>
                <button onClick={props.deleteCategory} id={props.category.id}>X</button>
        </div>
        </Link>
        
    </div>

export default CategoryCard;