import React, { Component} from "react";
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
                {
                    products.map(product => (
                        <article className="cp-products-list__box" key={product._id}>
                            <h2 className="cp-products-list__title"><strong>{product.title}</strong></h2>
                            <p className="cp-products-list__description">{product.description}</p>

                            <Link className="cp-products-list__link" to={`/products/${product._id}`}>Acessar</Link>
                        </article>
                    ))
                }
            </div>
        )
    }
}




