'use strict';

import api from './api.js';
import form from './form.js';

const bindSearch = function() {
  $('.landing').on('click', '.search-button', event => {
    $('main').removeClass('hidden');
    form.handleSearchGames();
  });
};

const bindRecommend = function() {
    $('.landing').on('click', '.recommend-button', event => {
        $('main').removeClass('hidden');
        form.handleRecommendGames();
    });
};

const handleSubmitSearch = function() {
  console.log('handleSubmitSearch currently only handles searching by name');
  $('.search').submit(event => {
    event.preventDefault();
    let query = $('.search').find('input').val();
    let filter = $('.search').find('select').val();
    console.log('filter is ' + filter);
    if (filter == "name") {
      api.getGameByName(query)
      .then(res => {
        handleDisplayResults(res.games)
      })
    }
    else if (filter == "desinger") {
      api.getGameByDesigner(query)
      .then(res => {
        handleDisplayResults(res.games)
      })
    };
  });
};

const handleDisplayResults = function(response) {
  let formattedResponse = [];
  response.forEach(function(game) {
    formattedResponse.push(`<li class="game" data-id="${game.id}>
        <p class="game-name">${game.name}</p>
        <img class="game-image" src="${game.image_url} "alt="cover art for ${game.name}>
        <p class="game-play-info">
          <span>Players:</span> ${game.min_players}-${game.max_players} </br>
          <span>Duration:</span> ${game.min_playtime}-${game.max_playtime} </br>
          <span>Rating:</span> ${game.average_user_rating} </br>
          <span>Description:</span> ${game.description} </br>
          <span>Designer:</span> ${game.designers} </br>
          <span>Publisher:</span> ${game.publishers} </br>
        </p>
        <a class="game-link" href=${game.url} target="_blank">Learn more</a>
      </li>`)
  });
  $('.results-list').html(formattedResponse);
}

const render = function() {

};

const main = function() {
  bindSearch();
  bindRecommend();
  handleSubmitSearch();
};

$(main);