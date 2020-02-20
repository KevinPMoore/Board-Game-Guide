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
    let response;
    let query = $('.search').find('input').val();
    api.getGameByName(query)
      .then(handleDisplayResults(api.getGameByName(query)))
      .then(res => {
        response = res
        console.log('response is ' + response)
        console.log(api.getGameByName(response))
        handleDisplayResults(response.games)
      });
  });
};

const handleDisplayResults = function(response) {
  //has to receive the query value from handleSubmitSearch
  let formattedResponse;
  $('.results').html(response);
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