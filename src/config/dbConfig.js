const mongoose = require('mongoose');

const dbConfig = 'mongodb+srv://Elica:Mb3hUDA1QchsJoED@cluster0.rhime0l.mongodb.net/?retryWrites=true&w=majority'

mongoose.set("strictQuery", true);

const connection = mongoose.connect(dbConfig, {
   useNewUrlParser: true,
   useUnifiedTopology: true
})

module.exports = connection;
