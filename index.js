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

const updateSearchFilters = function() {
    $('.search').on('change', '#filter', event => {
        let opt = event.currentTarget.value;
        console.log(opt)
        if(opt === 'name' || opt === 'designer' || opt === 'publisher') {
            $('.search').children('p').replaceWith(`<p>TEST STRING</p>`)
        }else {
            $('.search').children('p').replaceWith(`<p>TEST NUM</p>`)
        };
    });
};

const handleSubmitSearch = function() {
  console.log('handleSubmitSearch currently only handles searching by name');
  $('.search').submit(event => {
    event.preventDefault();
    let query = $('.search').find('input').val();
    api.getGameByName(query)
      .then(res => {
        console.log('response is ' + res)
        console.log(api.getGameByName(res))
        handleDisplayResults(res.games)
      });
  });
};

const handleDisplayResults = function(response) {
  let formattedResponse = [];
  response.forEach(function(game) {
    formattedResponse.push(`<li class="game" data-id="${game.id}>
        <p class="game-name">${game.name}</p>
        <img class="game-image" alt="cover art for ${game.name}>
        <p class="game-play-info">
          Players: ${game.min_players}-${game.max_players}
          Duration: ${game.min_playtime}-${game.max_playtime}
          Rating: ${game.average_user_rating}

      </li>`)
  });
  $('.results-list').html(formattedResponse);
}

const render = function() {

};

const main = function() {
  bindSearch();
  bindRecommend();
  updateSearchFilters();
  handleSubmitSearch();
};

$(main);