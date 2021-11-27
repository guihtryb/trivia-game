import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import md5 from 'crypto-js/md5';
import '../../Style/Initial.css';
import PropTypes from 'prop-types';
import trivia from '../../trivia.png';

import Login from '../../actions';

class Initial extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      disable: true,
      profile: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.sendLogin = this.sendLogin.bind(this);
    this.validLogin = this.validLogin.bind(this);
  }

  validLogin() {
    const { email } = this.state;
    const dotComLength = 3;

    const errorCases = [
      !email.includes('@'),
      email.split('@').length > 2,
      !email.includes('.com'),
      email.includes('.') && email.split('.')[1].length > dotComLength,
      email.includes('.') && email.split('.').length > 2,
    ];
    const filledCorrect = errorCases.every((error) => error === false);

    if (filledCorrect) {
      this.setState({ disable: false });
    } else {
      this.setState({ disable: true });
    }
  }

  handleChange({ target }) {
    const { value, id } = target;
    const { name, email } = this.state;
    if (name && email && value) {
      this.setState({
        [id]: value,
        profile: md5(email).toString(),
      });
    } else {
      this.setState({
        [id]: value,
        disable: true,
        profile: md5(email).toString(),
      });
    }
  }

  async sendLogin() {
    const response = await fetch('https://opentdb.com/api_token.php?command=request');
    const token = await response.json();
    const stringToken = token.token;

    localStorage.setItem('token', stringToken);

    const { name, email, profile } = this.state;
    const { Login: LoginAction, history } = this.props;
    LoginAction(name, email, profile, stringToken);

    history.push('/jogo');
  }

  render() {
    const { name, email, disable } = this.state;
    return (
      <section className="login-section">
        <img src={ trivia } alt="trivia logo" className="trivia-logo" />
        <div className="login-container">
          <div className="login-inputs-container">
            <input
              autoComplete="off"
              id="name"
              data-testid="input-player-name"
              type="text"
              onChange={ this.handleChange }
              placeholder="Name"
              value={ name }
              className="login-input"
            />
            <button
              data-testid="btn-play"
              type="button"
              disabled={ disable }
              onClick={ this.sendLogin }
              className="login-button"
            >
              Jogar
            </button>
            <input
              id="email"
              data-testid="input-gravatar-email"
              type="text"
              onChange={ this.handleChange }
              placeholder="E-mail"
              value={ email }
              className="login-input"
              onKeyUp={ this.validLogin }
            />

          </div>
          <Link
            to="/configuracoes"
            data-testid="btn-settings"
            className="login-settings"
          >
            Settings
          </Link>
        </div>

      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  Login: (name, email, profile, token) => dispatch(Login(name, email, profile, token)),
});

export default connect(null, mapDispatchToProps)(Initial);

Initial.propTypes = {
  Login: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.string).isRequired,
};
