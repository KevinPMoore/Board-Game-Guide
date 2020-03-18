'use strict';

import api from './api.js';
import form from './form.js';
import store from './store.js';

function backToTop() {
  $('h1').on('click', event => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  })
}

function bindSearch() {
  $('.landing').on('click', '.search-button', event => {
    $('.landing').find('.search-button').addClass('hidden');
    $('main').removeClass('hidden');
    $('.results-list').empty();
    form.handleSearchGames();
  });
};

function handleNewSearch() {
  $('.search').on('click', '.new-search', event => {
    $('.results-list').empty();
    form.handleSearchGames();
  })
}

function bindHelpButton() {
  $('.search').on('click', '.help-button', event => {
    form.handleFilterInstructions();
    alert(store.alert);
  });
};

function handleSubmitSearch() {
  $('.search').submit(event => {
    event.preventDefault();
    let query = $('.search').find('input').val();
    let filter = $('.search').find('select').val();
    $('.container').css('height', '100%');
    if (filter == "name") {
      api.getGameByName(query)
      .then(res => {
        handleDisplayResults(res)
      })
    }
    else if (filter == "designer") {
      api.getGameByDesigner(query)
      .then(res => {
        handleDisplayResults(res)
      })
    }
    else if (filter == "publisher") {
      api.getGameByPublisher(query)
      .then(res => {
        handleDisplayResults(res)
      })
    }
    else if (filter == "min_players") {
      api.getGameByMinPlayers(query)
      .then(res => {
        handleDisplayResults(res)
      })
    }
    else if (filter == "max_players") {
      api.getGameByMaxPlayers(query)
      .then(res => {
        handleDisplayResults(res)
      })
    }
    else if (filter == "min_playtime") {
      api.getGameByMinPlaytime(query)
      .then(res => {
        handleDisplayResults(res)
      })
    }
    else if (filter == "max_playtime") {
      api.getGameByMaxPlaytime(query)
      .then(res => {
        handleDisplayResults(res)
      })
    }
    else if (filter == "mechanics") {
      api.getGameByMechanic(query)
      .then(res => {
        handleDisplayResults(res)
      })
    }
    else if (filter == "theme") {
      api.getGameByTheme(query)
      .then(res => {
        handleDisplayResults(res)
      })
    }
  });
};

function handleDisplayResults(response) {
  let formattedResponse = [];
  response.forEach(function(game) {
    formattedResponse.push(
      `<li class="game">
        <section class="blurb">
          <div class="box">
            <p class="game-name">
              <span>Title:</span>
              ${game.name}
            </p>
            <img class="game-image" src="${game.image_url}" alt="cover art for ${game.name}">
          </div>
          <div class="game-description">
            <span>Description:</span> 
            ${game.description}
          </div>
        </section>
        <div class="info">
          <p class="game-play-info">
            <span>Players:</span> ${game.min_players}-${game.max_players} </br>
            <span>Duration:</span> ${game.min_playtime}-${game.max_playtime} minutes </br>
            <span>Rating:</span> ${game.average_user_rating} </br>
            <span>Designer:</span> ${game.designers} </br>
            <span>Publisher:</span> ${game.publishers} </br>
            <span>Game Mechanics:</span> ${game.mechanics.map(obj => obj.name).join(', ')} </br>
          </p>
          <a class="game-link" href=${game.url} target="_blank">Learn more</a>
        </div>
      </li>`
      )
  });
  $('.results-list').html(formattedResponse);
  $('section.search').html(`<button class="new-search">New Search</button>`)
}

function main() {
  backToTop();
  bindSearch();
  bindHelpButton();
  handleSubmitSearch();
  handleNewSearch();
  api.getMechanics();
  api.getThemes();
};

$(main);