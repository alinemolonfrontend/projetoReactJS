import React, { Component } from 'react';

import "./user.css"
import { Row, Col } from 'react-bootstrap';

export default class User extends Component {

    state = {
        people: [],
    }

    getPersonals = async () => {
        const url = "https://api.randomuser.me/?results=10"
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ people: data.results });
        console.log('state', this.state);
    }

    componentDidMount (){
        this.getPersonals();
    }

    render() {
        const { people } = this.state;

        return (
            <Row>
                <div>
                    { 
                        people.map( (item, key) => (
                            <Col key={key}>
                                <p>{item.name.title}</p>
                                <p>{item.name.first}</p>
                                <p>{item.name.last}</p>
                                <img src={item.picture.large} />
                            </Col>
                        ))
                    }
                </div>
            </Row>
        )

    }
}
