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
        if(opt === 'name' || 'designer' || 'publisher') {
            $('.search').children('p').replaceWith(`<p>TEST STRING</p>`)
        }else {
            $('.search').children('p').replaceWith(`<p>TEST NUM</p>`)
        }
    })
}

const handleSubmitSearch = function() {
  console.log('handleSubmitSearch currently only handles searching by name')
  let query;
  $('.search').submit(event => {
    event.preventDefault();
    query = $('.search').find('input').val();
    console.log(api.getGameByName(query))
  })
  
}

const handleDisplayResults = function() {
  //has to receive the query value from handleSubmitSearch
  
}

const render = function() {

};

const main = function() {
  bindSearch();
  bindRecommend();
  updateSearchFilters();
  handleSubmitSearch();
  handleDisplayResults();
  console.log('filter else on 28 not working');
};

$(main);