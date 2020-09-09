import React from 'react';
import { Jumbotron, Container, Button } from 'react-bootstrap';

const Home = () => {
    return (
        <Jumbotron fluid>
        <Container>
            <h4>Welcome to Communiteam, a web application by the people, for the people. Get involved in the Oakland community today by staying up to date with events happening around the city.</h4><br></br>
            <p>Click on the button below to browse events by category. Please add events or categories as you see fit!</p>
            <p>
                <Button href="/categories" variant="primary">Browse by Category</Button>
            </p>
        </Container>
        </Jumbotron>
    )
}

export default Home;