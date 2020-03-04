'use strict';

const BASE_URL = 'https://www.boardgameatlas.com/api/search?';
const client_id = '&client_id=gGLrG80h9q';

const apiFetch = function(...args) {
    let error;
    return fetch(...args)
        .then(res => {
            if(!res.ok) {
                error = {code: res.status};
                if(!res.headers.get('content-type').includes('json')) {
                    return Promise.reject(error)
                }
            }
            return res.json();
        })
        .then(data => {
            if (error) {
                error.message = data.message;
                return Promise.reject(error);
            }
            return data;
        })
        .then(data => {
            return fetch(`https://www.boardgameatlas.com/api/game/mechanics?client_id=gGLrG80h9q`)
                .then(res => res.json())
                .then(mechanics => {
                    const mechanicsNormalized = mechanics.mechanics.reduce((acc, obj) => {
                        acc[obj.id] = obj;
                        return acc;
                    }, {})
                    console.log('mechanicsNormalized is ' + mechanicsNormalized)
                    const gamesWithMechanics = data.games.map(game => {
                        game.mechanics = game.mechanics.map(m => {
                            return mechanicsNormalized[m.id];
                        })
                        return game;
                    })
                    console.log('gamesWithMechanics is ' + gamesWithMechanics)
                    return gamesWithMechanics;
                })
                .catch()
        });
};

const getGameByName = function(name) {
    return apiFetch(`${BASE_URL}name=${name}&${client_id}`);
};

const getGameByDesigner = function(designer) {
    return apiFetch(`${BASE_URL}designer=${designer}&${client_id}`);
};

const getGameByPublisher = function(publisher) {
    return apiFetch(`${BASE_URL}publisher=${publisher}&${client_id}`);
};

const getGameByMinPlayers = function(players) {
    let inclusivePlayers = (players - 1)
    return apiFetch(`${BASE_URL}gt_min_players=${inclusivePlayers}&${client_id}`)
};

const getGameByMaxPlayers = function(players) {
    let inclusivePlayers = (players + 1)
    return apiFetch(`${BASE_URL}lt_max_players=${inclusivePlayers}&${client_id}`)
};

const getGameByMinPlaytime = function(time) {
    let inclusivePlaytime = (time - 1)
    return apiFetch(`${BASE_URL}gt_min_playtime=${inclusivePlaytime}&${client_id}`)
};

const getGameByMaxPlaytime = function(time) {
    let inclusivePlaytime = (time + 1)
    return apiFetch(`${BASE_URL}lt_max_playtime=${inclusivePlaytime}&${client_id}`)
};

export default {
    getGameByName,
    getGameByDesigner,
    getGameByPublisher,
    getGameByMinPlayers,
    getGameByMaxPlayers,
    getGameByMinPlaytime,
    getGameByMaxPlaytime
};