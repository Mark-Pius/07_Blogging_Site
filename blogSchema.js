const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://MyFirstBlog:vr7QBBmxmFFKsy6@nodeapps.rxaannf.mongodb.net/blog')

const blogSchema = new mongoose.Schema({
    name: String,
    title: String,
    body: String
})

module.exports = mongoose.model('post', blogSchema)