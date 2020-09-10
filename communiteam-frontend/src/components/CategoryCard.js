import React from 'react';
import '../CategoryCard.css';
import { Card, Button } from 'react-bootstrap';


const CategoryCard  = (props) => {
    
    return (
        <Card style={{ width: "18rem" }} className="card">
            <Card.Img variant="top" src={props.category.image} />
            <Card.Body>
                <Card.Title>{props.category.name} <Button variant="light" size="sm" onClick={props.deleteCategory} id={props.category.id}>X</Button> </Card.Title>
                <Card.Text>
                    {props.category.description}
                    {/* Oakland prioritizes a healthy community for all. Join in any of our health and wellness events, including yoga by the lake, group runs, bike rides, and so much more. */}
                </Card.Text>
                <Button key={props.category.id} href={`/categories/${props.category.id}/events`} variant="primary">Events</Button>
            </Card.Body>
        </Card>
        )
    }
        
        {/* <div className="category-card">
            <Link key={props.category.id} to={`/categories/${props.category.id}/events`}>
                <h3>{props.category.name}</h3>
            </Link>
            <button onClick={props.deleteCategory} id={props.category.id}>X</button>
        </div> */}

export default CategoryCard;