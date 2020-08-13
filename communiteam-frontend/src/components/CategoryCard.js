import React from 'react';

const CategoryCard  = (props) =>
    
    <div>
        <div className="category-card">
                <p>{props.category.loading ? <h5>Loading......</h5> : props.category.name}</p>
                <button onClick={props.deleteCategory} id={props.category.id}>X</button>
        </div>
    </div>

export default CategoryCard;