import React, { Component } from 'react';

import "./user.css"
import { Row, Col } from 'react-bootstrap';

export default class User extends Component {

    state = {
        loading: true,
        persons: [],
    }

    getPersonals = async () => {
        const url = "https://api.randomuser.me/?results=10"
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ persons: data.results, loading: false });
    }

    componentDidMount (){
        this.getPersonals();
    }

    render() {
        const { persons, loading } = this.state;

        if(loading){
            return <div>loading...</div>
        }

        if(!persons){
            return <div>não existe dados para carregar.</div>
        }

        return (
            <div className="cp-card__list people">
                <Row>
                    { 
                        persons.map( (item, key) => (
                            <Col lg={3} md={4} xs={12} key={key}>
                                <div className="cp-card">
                                    <div className="cp-card__box-image">
                                        <img className="cp-card__image" src={item.picture.large} />
                                    </div>
                                    <div className="cp-card__content">
                                        <p className="cp-card__title">{item.name.title}</p>
                                        <p className="cp-card__name">{item.name.first + " " + item.name.first}</p>
                                    </div>
                                </div>
                            </Col>
                        ))
                    }
                </Row>
            </div>
            
        )

    }
}
