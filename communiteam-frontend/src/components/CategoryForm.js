import React from 'react';

const CategoryForm = (props) =>
    
    <>
        <form onSubmit={props.handleSubmit}>
            <input type="text" name="name" onChange={props.handleChange}></input>
            <input type="submit" />
        </form>
    </>

export default CategoryForm;
