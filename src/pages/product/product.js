import React, { Component } from 'react';
import api from '../../services/api';

import './product.css';


export default class Product extends Component {

    state = {
        product: {},
    }

    async componentDidMount() {
        const { id } = this.props.match.params;
        const response = await api.get(`/products/${id}`);

        this.setState({ product: response.data });
    }

    handleClick = () => {
        this.setState(prevState => {
            let product = Object.assign({}, prevState.product);
            product.title = 'Aline Molon';
            return { product };
        });
    }

    render() {
        const { product } = this.state;

        return (
            <div  className="pg-product">
                <div className="pg-product__info">
                    <h1 className="pg-product__title">{product.title}</h1>
                    <p className="pg-product__text">{product.description}</p>
                    <div className="pg-product__box-link">
                        <p className="pg-product__text-link">URL: 
                            <a className="pg-product__link" href={product.url}>{product.url}</a>
                        </p>
                    </div>
                    <button className="pg-product__btn" onClick={this.handleClick}>
                        Botão para mudar o titulo do objeto produto {product.title}
                    </button>
                </div>
            </div>
        )
    }
}