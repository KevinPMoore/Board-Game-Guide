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
}

const getGameByName = function(game) {
    return apiFetch(`${BASE_URL}${game}${client_id}`);
}

export default {
    getGameByName
};