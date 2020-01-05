import React, { Component } from "react";
import { Row, Col, Container } from 'react-bootstrap';

import "./login.css"

export default class Login extends Component {

    state = {
        name: "",
        password: ""
    }

    handleNameChange = (e) => {
        this.setState({ name: e.target.value });
    }
    handlePasswordChange = (e) => {
        this.setState({ password: e.target.value });
    }

    handleLogin = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {

        return (
            <Row>
                <Col>
                    <form className="formLogin">

                        <div className="groupLogin">
                            <input className="inputLogin" type="text" name="name" value={this.state.name} onChange={this.handleNameChange}/>
                        </div>

                        <div className="groupLogin">
                            <input className="inputLogin" type="password" name="password" value={this.state.password} onChange={this.handlePasswordChange}/>
                        </div>
                        
                        <div className="groupLogin">
                            <button type="submit" className="btnLogin" name="btnLogin" onClick={this.handleLogin} >Continuar</button>
                        </div>

                    </form>
                </Col>
            </Row>
            
        )
    }
}
