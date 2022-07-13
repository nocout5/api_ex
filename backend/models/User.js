const mongoose =('mongoose');

const uniqueValidator = require('mongoose-unique-validator');

const userShema = mongoose.Shema({
    email: {type: String, required: true, unique: true},
    password: {type: String, requires: true}
});

userShema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userShema);