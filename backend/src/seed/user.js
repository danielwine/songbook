const User = require('../model/user');
const mongoose = require('mongoose');

(async () => {
    const users = [{
        username: "admin",
        password: "test1",
        role: "admin"
    },
    {
        username: "user",
        password: "test2",
        role: "user"
    }
    ]
    for (const user of users) {
        userItem = new User(user)
        userItem.save()
    }
})();
