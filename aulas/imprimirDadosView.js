// - imprimir na tela informações gerada na lógica


import React, { Component} from 'react';
import './styles.css';

export default class ListProducts extends Component {

    state = {
        product : {
            name: "copo",
            color: "Branco",
            size: "20 cm",
            price: "R$4,00"
        }
    }

    render() {
        const { product } = this.state;

        return (

            <ul>
                <li>{ product.name }</li>
                <li>{ product.color }</li>
                <li>{ product.size }</li>
                <li>{ product.price }</li>
            </ul>

        )

    }

}
