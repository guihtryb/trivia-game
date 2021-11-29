import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Feedback.css';

class Feedback extends Component {
  render() {
    const { dados, history } = this.props;
    const { name, profile, score, assertions } = dados;
    return (
      <section className="feedback-section">
        <div className="feedback-container">
          <header>
            <span data-testid="feedback-text">Feedback</span>
            <p data-testid="header-player-name">{ name }</p>
            <p data-testid="header-score">{ score }</p>
            <p data-testid="feedback-total-score">{ score }</p>
            <p data-testid="feedback-total-question">{ assertions }</p>
            <img
              src={ `https://www.gravatar.com/avatar/${profile}` }
              alt="gravatar"
              data-testid="header-profile-picture"
              className="profile-image"
            />
            {
              assertions > 2
                ? <p data-testid="feedback-text">Mandou bem!</p>
                : <p data-testid="feedback-text">Podia ser melhor...</p>
            }
          </header>
          <button
            type="button"
            data-testid="btn-play-again"
            className="btn-play-again"
            onClick={ () => history.push('/') }
          >
            Jogar novamente
          </button>
          <button
            type="button"
            data-testid="btn-ranking"
            className="btn-ranking"
            onClick={ () => history.push('/ranking') }
          >
            Ver Ranking
          </button>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  dados: state.scoreReducer,
});

export default connect(mapStateToProps, null)(Feedback);

Feedback.propTypes = {
  dados: PropTypes.objectOf(PropTypes.string).isRequired,
  history: PropTypes.objectOf(PropTypes.string).isRequired,
};
