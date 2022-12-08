const regisUser = require('./register');
const allData = require('./getUser');
const byId = require('./getById');
const update = require('./update');

module.exports = {
    regisUser,
    allData,
    byId,
    update
}