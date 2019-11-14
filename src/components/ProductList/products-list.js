import React, { Component} from "react";
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import "./products-list.css";

export default class ListProducts extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { products } = this.props;

        return (
            <>
                {
                    products.map(product => (
                        <Col md={4} key={product._id}>
                            <Card className="cp-card">
                                <Card.Body>
                                    <Card.Title>{product.title}</Card.Title>
                                    <Card.Text>{product.description}</Card.Text>
                                    <Link className="cp-products-list__link" to={`/products/${product._id}`}>
                                        Acessar
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </>
           
        )
    }
}




