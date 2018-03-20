const mongoose = require('mongoose');
const { Schema } = mongoose;

const businessSchema = new Schema({
	id: String,
	name: String,
	neighborhood: String,
	address: String,
	city: String,
	state: String,
	postal_code: String,
	latitude: Number,
	longitude: Number,
	stars: Number,
	review_count: Number,
	is_open: Number,
});

const Business = mongoose.model('Business', businessSchema);

module.exports = { Business };