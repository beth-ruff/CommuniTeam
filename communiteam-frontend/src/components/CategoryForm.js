import React from 'react';

const CategoryForm = (props) =>
    
    <>
        <form onSubmit={props.handleSubmit}>
            <label>Name</label>
            <input className="=form-control-sm" type="text" name="name" onChange={props.handleChange}/><br></br>
            <label>Description</label>
            <input className="=form-control-sm" type="text" name="description" onChange={props.handleChange}/><br></br>
            <input type="file" onChange={props.fileHandler}/>
            {/* <button onClick={props.fileUploadHandler}>Upload</button> */}
            {/* <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroupFileAddon01">Upload</span>
                </div>
                <div className="custom-file">
                    <input type="file" className="custom-file-input" id="inputGroupFile01" name="image" aria-describedby="inputGroupFileAddon01" onChange={props.fileChange}/>
                    <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>
                </div>
            </div> */}
            <input type="submit" />
        </form>
    </>

export default CategoryForm;
