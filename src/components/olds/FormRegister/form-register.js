import React, { Component } from "react";
import "./form-register.css";

 class FormRegister extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      firstName,
      lastName,
      old,
      email,
      handleChangeName,
      handleChangeLastname,
      handleChangeOld,
      handleChangeEmail
    } = this.props;

    return (
      <div className="box-form-register">
        <h2 className="form-title">Preecha as informações abaixo</h2>
        <form className="form-register">
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Insira seu primeiro nome"
              value={firstName}
              onChange={handleChangeName}
            />
          </div>
          <small className="message-success">{firstName}</small>

          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Insira seu primeiro nome"
              value={lastName}
              onChange={handleChangeLastname}
            />
          </div>
          <small className="message-success">{lastName}</small>

          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Insira seu primeiro nome"
              value={old}
              onChange={handleChangeOld}
            />
          </div>
          <small className="message-success">{old}</small>

          <div className="form-group">
            <textarea onChange={handleChangeEmail} value={email}>{email}</textarea>
          </div>
          <small className="message-success">{email}</small>

          <div className="form-group">
            <input className="btn-send" type="submit" value="Enviar" />
          </div>
        </form>
      </div>
    );
  }
}

export default FormRegister;
