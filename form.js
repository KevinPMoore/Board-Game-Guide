'use strict';

const handleSearchGames = function() {
    const searchForm = 
    `<form>
        <label for="search-input">Search</label>
        <input type="text" id="search-input" name="search-input" placeholder="ex. Jenga" required>
        <label for="search-filter">Filters</label>
        <select id="search-filter" name="search-filter">
            <option value="1">Name</option>
            <option value="2">Theme</option>
        </select>
        <button type="button">Go</button>
    </form>`
    $('.search').html(searchForm)
    console.log('Correct filter options then remove this line')
};

const handleRecommendGames = function() {
    const recommendForm =
    `<form>
        <label for="search-input">Search</label>
        <input type="text" id="search-input" name="search-input" placeholder="ex. Jenga" required>
        <label for="recommend-filter">Filters</label>
        <select id="recommend-filter" name="recommend-filter">
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