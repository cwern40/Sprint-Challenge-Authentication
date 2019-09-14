const db = require('../database/dbConfig');

module.exports = {
    findBy,
    add
}

function findBy(filter) {
    
}

function add(user) {
    return db('users').insert(user)
}