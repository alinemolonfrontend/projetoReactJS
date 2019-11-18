import React, { Component } from "react";
import "./form-register.css";

class FormRegister extends Component {

    state = {
        name: "",
        surname: "",
        old: "",
        email: "",
        password: "",
        message: "",
        itemSelect: ""
    }

    // function de handleChange generica para atualizar state dos campos. 
    // O nome da variavel do state deve ser o mesmo usado no name e passado por params na function de change do input
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSelect = event => {
        this.setState({ itemSelect: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log('dados: ', this.state);
        this.setState({ itemSelect: event.target.value });
    }

    render() {
        const { name, surname, old, email, password, message, itemSelect } = this.state;

        return (
            <div className="cp-form-register">
                <div className="cp-form-register__box">
                    <h2 className="cp-form-register__title">Preecha as informações abaixo</h2>
                    <form className="cp-form-register__form" onSubmit={this.handleSubmit}>
                        <div className="cp-form-register__form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="name"
                                value={name}
                                onChange={this.handleChange}
                            />
                        </div>
                        <small className="message-success">{name}</small>

                        <div className="cp-form-register__form-group">
                            <input
                                type="text"
                                name="surname"
                                placeholder="surname"
                                value={surname}
                                onChange={this.handleChange}
                            />
                        </div>
                        <small className="message-success">{surname}</small>

                        <div className="cp-form-register__form-group">
                            <input
                                type="number"
                                name="old"
                                placeholder="old"
                                value={old}
                                onChange={this.handleChange}
                            />
                        </div>
                        <small className="message-success">{old}</small>

                        <div className="cp-form-register__form-group">
                            <input
                                type="text"
                                name="email"
                                placeholder="Email"
                                value={email}
                                onChange={this.handleChange}
                            />
                        </div>
                        <small className="message-success">{email}</small>

                        <div className="cp-form-register__form-group">
                            <input
                                type="password"
                                name="password"
                                placeholder="password"
                                value={password}
                                onChange={this.handleChange}
                            />
                        </div>
                        <small className="message-success">{password}</small>

                        <div className="cp-form-register__form-group">
                            <select 
                                name="itemSelect"
                                value={itemSelect} 
                                onChange={this.handleSelect}>
                                <option>nenhum</option>
                                <option>Texto 02</option>
                                <option>Texto 03</option>
                                <option>Texto 04</option>
                            </select>        
                        </div>
                        <small className="message-success">{itemSelect}</small>

                        <div className="cp-form-register__form-group">
                            <textarea 
                                name="message"
                                placeholder="message" 
                                value={message} 
                                onChange={this.handleChange} 
                            >
                                {message}
                            </textarea>
                        </div>
                        <small className="message-success">{message}</small>

                        <div className="cp-form-register__form-group">
                            <button className="cp-form-register__btn-send" type="submit" onClick={this.handleSubmit}>
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default FormRegister;
