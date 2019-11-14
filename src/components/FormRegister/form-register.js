import React, { Component } from "react";
import "./form-register.css";

class FormRegister extends Component {

    state = {
        firstName: "",
        lastName: "",
        old: "",
        email: "",
        message: ""
    }

    handleChangeName = (event) => {
        console.log('firstName', event.target.value);
        this.setState({ firstName: event.target.value });
    }

    handleChangeLastname = (event) => {
        console.log('lastName', event.target.value);
        this.setState({ lastName: event.target.value });
    }

    handleChangeOld = (event) => {
        console.log('old', event.target.value);
        this.setState({ old: event.target.value });
    }

    handleChangeEmail = (event) => {
        console.log('email', event.target.value);
        this.setState({ email: event.target.value });
    }

    handleChangeMessage = (event) => {
        console.log('message', event.target.value);
        this.setState({ message: event.target.value });
    }

    render() {
        const { firstName, lastName, old, email, message } = this.state;

        return (
            <div className="cp-form-register" onClick={alert('click')}>
                <div className="cp-form-register__box">
                    <h2 className="cp-form-register__title">Preecha as informações abaixo</h2>
                    <form className="cp-form-register__form">
                        <div className="cp-form-register__form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Insira seu primeiro nome"
                                value={firstName}
                                onChange={this.handleChangeName}
                            />
                        </div>
                        <small className="message-success">{firstName}</small>

                        <div className="cp-form-register__form-group">
                            <input
                                type="text"
                                name="lastname"
                                placeholder="Insira seu sobrenome"
                                value={lastName}
                                onChange={this.handleChangeLastname}
                            />
                        </div>
                        <small className="message-success">{lastName}</small>

                        <div className="cp-form-register__form-group">
                            <input
                                type="text"
                                name="idade"
                                placeholder="Informe sua idade"
                                value={old}
                                onChange={this.handleChangeOld}
                            />
                        </div>
                        <small className="message-success">{old}</small>

                        <div className="cp-form-register__form-group">
                            <input
                                type="text"
                                name="email"
                                placeholder="Informe seu email"
                                value={email}
                                onChange={this.handleChangeEmail}
                            />
                        </div>
                        <small className="message-success">{old}</small>

                        <div className="cp-form-register__form-group">
                            <textarea onChange={this.handleChangeMessage} value={message} placeholder="Digite sua mensagem" >{message}</textarea>
                        </div>
                        <small className="message-success">{message}</small>

                        <div className="cp-form-register__form-group">
                            <input className="cp-form-register__btn-send" type="submit" value="Enviar" />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default FormRegister;
