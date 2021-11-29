import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Ranking.css';

export default class Ranking extends Component {
  render() {
    const ranking = JSON.parse(localStorage.getItem('ranking'));
    const one = -1;
    ranking.sort((a, b) => {
      if (a.score < b.score) return 1;
      return a.score > b.score ? one : 0;
    });
    console.log(ranking);
    const { history } = this.props;
    return (
      <section className="ranking-section">
        <div className="ranking-container">
          <p data-testid="ranking-title">Ranking</p>
          <img
            src={ `https://www.gravatar.com/avatar/${ranking[0].picture}` }
            alt="gravatar"
            data-testid="header-profile-picture"
            className="profile-image"

          />
          {
            ranking.map((player, index) => (
              <div className="player-infos" key={ index }>
                <p className="player-name" data-testid={ `player-name-${index}` }>{`${index + 1}. ${player.name}`}</p>
                <p className="player-score" data-testid={ `player-score-${index}` }>{player.score}</p>
              </div>
            ))
          }
          <button
            data-testid="btn-go-home"
            className="btn-go-home"
            type="button"
            onClick={ () => history.push('/') }
          >
            voltar
          </button>
        </div>
      </section>
    );
  }
}

Ranking.propTypes = {
  history: PropTypes.objectOf(PropTypes.string).isRequired,
};
