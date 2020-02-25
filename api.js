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
        });
};

const getGameByName = function(name) {
    return apiFetch(`${BASE_URL}name=${name}&${client_id}`);
};

const getGameByDesigner = function(designer) {
    console.log('get game by designer ran')
    return apiFetch(`${BASE_URL}designer=${designer}&${client_id}`);
};

const getGameByPublisher = function(publisher) {
    return apiFetch(`${BASE_URL}publisher=${publisher}&${client_id}`);
};

const getGameByMinPlayers = function(players) {
    //how to do player count?
};

const getGameByMaxPlayers = function(players) {
    //how to do player count?
};

const getGameByMinPlaytime = function(time) {
    //should be same as players
};

const getGameByMaxPlaytime = function(time) {
    //should be same as players
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