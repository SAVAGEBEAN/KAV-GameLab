const express = require('express');
const mongoose = require('mongoose');

const url = 'mongodb+srv://KAV:KAV123456@cluster0.vuoad.mongodb.net/Game_info?retryWrites=true&w=majority';
const app = express();

mongoose.connect(url, {useNewUrlParser: true});
const con = mongoose.connection

con.on('open', ()=>{
    console.log('Connected');
})

const gamecardRouter = require('./routes/Gamecardpage')
app.use('/game', gamecardRouter)

app.use(express.json())

app.listen(9000, ()=>{
    console.log(`server is running`)
})