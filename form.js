'use strict';

import store from './store.js'

const handleSearchGames = function() {
    const searchForm = 
    `<form>
        <label for="search-input">Search</label>
        <input type="text" id="search-input" name="search-input" placeholder="ex. Jenga" required>
        <label for="filter">Filters</label>
        <select id="filter" name="filter">
            <option value="name">Name</option>
            <option value="designer">Designer</option>
            <option value="publisher">Publisher</option>
            <option value="min_players">Minimum Players</option>
            <option value="max_players">Maximum Players</option>
            <option value="min_playtime">Minumum Playtime</option>
            <option value="max_playtime">Maximum Playtime</option>
        </select>
        <button type="submit" class="submit">Go</button>
    </form>
    <button class="help-button">Click here for help with filters</button>`
    $('.search').html(searchForm)
};

const handleRecommendGames = function() {
    const recommendForm =
    `<form>
        <label for="search-input">Search</label>
        <input type="text" id="search-input" name="search-input" placeholder="ex. Jenga" required>
        <label for="filter">Filters</label>
        <select id="filter" name="filter">
            <option value="theme">Theme</option>
            <option value="mechanics">Mechanics</option>
        </select>
        <button type="submit" class="submit">Go</button>
    </form>
    <button class="help-button">Click here for help with filters</button>`
    $('.search').html(recommendForm)
};

const handleFilterInstructions = function() {
    let filter = $('.search').find('select').val();
    if (filter == "name" || filter == undefined) {
        store.alert = "Search for board games by name such as 'Catan'.  This filter accepts a partial match (ex. the search results for 'Cata' would include 'Catan')."
      }
      else if (filter == "designer" || filter == "publisher") {
        store.alert = "Search for games based on the designer or publisher.  These filters require an exact match (ex. 'Klaus' will not return any results but 'Klaus Teuber' will)."
      }
      else if (filter == "min_players" || filter == "max_players") {
        store.alert = "Search for games with a specific number of players.  When using these filters, your search must be a number."
      }
      else if (filter == "min_playtime" || filter == "max_playtime") {
        "Search for games based on how long they take to paly.  When using these filters, your search must be a number."
      }
      else if (filter == "mechanics") {
        `Search for games that use a specific gameplay mechanic.  This filter requires an exact match.  Valid mechanics are: ${populateMechanicsList}.`
      }
      else if (filter == "theme") {
        `Search for games that have a specific theme.  This filter requires an exact match.  Valid themes are: ${populateThemesList}.`
      }
};

const populateMechanicsList = function () {
    let mechanicsList = [];
    store.mechanics.forEach(obj => mechanicsList.push(Object.values(obj)[1]));
    return(mechanicsList.join(', '));
};

const populateThemesList = function () {
    let themesList = [];
    store.themes.forEach(obj => themesList.push(Object.values(obj)[1]));
    return(themesList.join(', '))
}

export default {
    handleSearchGames,
    handleRecommendGames,
    handleFilterInstructions
};