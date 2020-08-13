import React from 'react';

const CategoryCard  = (props) =>
    <div>
        <div className="category-card">
                    <p>{props.category.loading ? <h5>Loading......</h5> : props.category.name}</p>
        </div>
    </div>

export default CategoryCard;