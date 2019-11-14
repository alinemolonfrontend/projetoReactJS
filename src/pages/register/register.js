import React, { Component } from 'react';
import FormRegister from "../../components/FormRegister/form-register";

import './register.css';

export default class Register extends Component {

    render() {

        return (
            <div className="mbp-register">
                <div className="container">
                    <FormRegister />
                </div>
            </div>

        )
    }
}