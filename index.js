'use strict';

/*
import api from 'api';
*/
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

const render = function() {

};

const main = function() {
  bindSearch();
  bindRecommend();
  console.log('main ran - remove this later');
  console.log('add filter guide somewhere then remove this line')
};

$(main);