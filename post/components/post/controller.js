const { nanoid } = require('nanoid');

const TABLE = 'post';

module.exports = function(injectedStore) {
    let store = injectedStore || require('../../../store/dummy');

    function list() {
        return store.list(TABLE);
    }

    function get(id) {
        return store.get(TABLE, id);
    }

    function upsert({id = null, user, text}) {
        const newPost = {
            id: id || nanoid(),
            user: user,
            text: text,
        };

        return store.upsert(TABLE, newPost);
    }

    function getByUser(userId) {
        return store.query(TABLE, {
            user: userId,
        });
    }

    return {
        list,
        get,
        upsert,
        getByUser,
    };
};
