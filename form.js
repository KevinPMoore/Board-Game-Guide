'use strict';

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
        <button type="button">Go</button>
    </form>
    <p></p>`
    $('.search').html(searchForm)
    console.log('Correct filter options then remove this line')
};

const handleRecommendGames = function() {
    const recommendForm =
    `<form>
        <label for="search-input">Search</label>
        <input type="text" id="search-input" name="search-input" placeholder="ex. Jenga" required>
        <label for="filter">Filters</label>
        <select id="filter" name="filter">
            <option value="1">Theme</option>
            <option value="2">Mechanics</option>
        </select>
        <button type="button">Go</button>
    </form>`
    $('.search').html(recommendForm)
    console.log('Correct filter options then remove this line')
};

const handleResults = function() {

};

export default {
    handleSearchGames,
    handleRecommendGames,
    handleResults
};