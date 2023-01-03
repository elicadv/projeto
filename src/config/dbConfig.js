//mongodb+srv://<usuario>:Elica:XL76HqfaTsE96pyw@cluster0.rhime0l.mongodb.net/annotations?retryWrites=true&w=majority


const mongoose = require('mongoose');

const dbConfig = 'mongodb+srv://Elica:XL76HqfaTsE96pyw@cluster0.rhime0l.mongodb.net/annotations?retryWrites=true&w=majority'

mongoose.set("strictQuery", true);

const connection = mongoose.connect(dbConfig, {
   useNewUrlParser: true,
   useUnifiedTopology: true
})

module.exports = connection;
