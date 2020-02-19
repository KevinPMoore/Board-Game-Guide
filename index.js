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

const updateSearchFilters = function() {
    $('.search').on('change', '#filter', event => {
        let opt = event.currentTarget.value;
        console.log(opt)
        if(opt === "name" || "designer" || "publisher") {
            $('.search').children('p').replaceWith(`<p>TEST STRING</p>`)
        }else {
            $('.search').children('p').replaceWith(`<p>TEST NUM</p>`)
        }
    })
}

const render = function() {

};

const main = function() {
  bindSearch();
  bindRecommend();
  updateSearchFilters();
  console.log('main ran - remove this later');
  console.log('filter else on 28 not working')
};

$(main);