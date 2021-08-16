const express = require('express')
const app = express();
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const PORT = 8081

// socket io

io.on('connection', (socket) => {
    console.log('[USER CONNECTED]');

    socket.on('msg', (data) => {
        console.log(data)
        // io representa o servidor // socket representa apenas o cliente que emitiu 
        io.emit('show_msg', { msg: data, date: '10/08/2021' })
    })

})

//config
    //view engine
    app.set('view engine', 'ejs')

//routes
app.get('/', (req, res) => {
    res.render('index')
})

http.listen(PORT, () => {
    console.log('SERVIDOR [ONLINE]')
})