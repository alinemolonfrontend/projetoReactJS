import React, { Component } from "react";
import api from "../../services/api";
import { Link } from 'react-router-dom';

import ListProducts from '../../components/ProductList/products-list';
import Counter from '../../components/Counter/counter';
import ImageSlider from '../../components/ImageSlider/image-slider';

import "./main.css"

export default class Main extends Component {

    state = {
        products: [],
        productInfo: {},
        page: 1,
        slideVisible: true,
    }

    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`);
        const { docs, ...productInfo } = response.data;
  
        this.setState({ products: docs, productInfo, page });
    }

    componentDidMount() {
        this.loadProducts();
    }

    prevPage = () => {
        // code
        const { page } = this.state;

        // if
        if (page === 1) return;

        // else
        const pageNumber = page - 1;
        this.loadProducts(pageNumber);
    }

    nextPage = () => {
        const { page, productInfo } = this.state;

        // if
        if (page === productInfo.pages) return;

        // else
        const pageNumber = page + 1;
        this.loadProducts(pageNumber);
    }

    render() {
        // busca as variaveis que estao no state.
        const { products, page, productInfo, slideVisible } = this.state;

        return (
            <div className="pg-main">
                {slideVisible ? <ImageSlider/> : null }
                <div className="container">
                    <Link className="pg-main__btn-signup" to={"/register/"}>Criar conta</Link>
                    <ListProducts products={products} />
                    <div className="pg-main__actions">
                        <button className="pg-main__btn" disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                        <button className="pg-main__btn" disabled={page === productInfo.pages} onClick={this.nextPage}>Próximo</button>
                    </div>
                    <Counter initialCount={1000}/>
                </div>
            </div>
           
        )
    }
}
