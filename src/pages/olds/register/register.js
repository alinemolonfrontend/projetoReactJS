import React, { Component } from 'react';
import FormRegister from "../../components/FormRegister/form-register";

import './register.css';

export default class Register extends Component {

    state = {
        firstName: "aline",
        lastName: "Rigoni",
        old: "33",
        email: "alinecristinamolon@gmail.com",
        message: "Estou cansada de lutar"
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
            <div className="mbp-register">
                <div className="container">

                    <FormRegister
                        firstName={firstName}
                        lastName={lastName}
                        old={old}
                        email={email}
                        message={message}
                        handleChangeName={this.handleChangeName}
                        handleChangeLastname={this.handleChangeLastname}
                        handleChangeOld={this.handleChangeOld}
                        handleChangeEmail={this.handleChangeEmail}
                        handleChangeMessage={this.handleChangeMessage}
                    />

                </div>
            </div>

        )
    }
}