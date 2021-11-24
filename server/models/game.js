const { Int32 } = require('bson')
const mongoose = require('mongoose')

const gameSchema = new mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    Game_Name:String,
    Description:String,
    price:String,
  
    Game_Link:String
});

module.exports = mongoose.model("games" , gameSchema)