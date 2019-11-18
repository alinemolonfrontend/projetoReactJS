import React, { Component } from "react";
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import "./products-list.css";

export default class ListProducts extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { products } = this.props;

        return (
            <div className="cp-products-list">
                <Row>
                    {
                        products.map(product => (
                            <Col md={4} key={product._id}>
                                <div className="cp-products-list__card">
                                    <div className="cp-products-list__card-box">
                                        <div className="cp-products-list__card-content">
                                            <div className="cp-products-list__card-title">{product.title}</div>
                                            <div className="cp-products-list__card-description">{product.description}</div>
                                        </div>
                                        <Link className="cp-products-list__card-link" to={`/products/${product._id}`}>
                                            Acessar
                                        </Link>
                                    </div>
                                </div>
                            </Col>
                        ))
                    }
                </Row >
            </div>

        )
    }
}




