const mongoose = require('mongoose');
const { Schema } = mongoose;

const citySchema = new Schema({
	name: String,
});

const City = mongoose.model('City', citySchema);

module.exports = { City };