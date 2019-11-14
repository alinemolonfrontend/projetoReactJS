import React, { Component } from 'react';
import './counter.css';

export default class Counter extends Component {

    constructor(props){
        super(props);

        this.state = {
            count: props.initialCount
        }
    }

    handeIncrement = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    handeDecrement = () => {
        this.setState({
            count: this.state.count - 1
        });
    }

    render() {
        const { count } = this.state;
        console.log('render carregado'); 

        return (
            
            <div className="cpn-counter">
                <div className="cpn-counter__box">
                    <button className="cpn-counter__btn" onClick={this.handeDecrement}>decrement</button>
                    <p className="cpn-counter__text">count: {count}</p>
                    <button className="cpn-counter__btn" onClick={this.handeIncrement}>increment</button>
                </div>
            </div>
        )
    }
}
