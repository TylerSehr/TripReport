const express = require('express')
const app = express()
const server = require('http').createServer(app)

const bodyParser = require('body-parser');


// let chatServer = new ChatServer(server)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



// app.get('/chat', (req, res) => {
// 	console.log(chatServer.chatStream);
	
// 	res.send(chatServer.chatStream)
// })


app.use(express.static('build'))



const PORT = process.env.PORT || 5000

server.listen(PORT, () => {
	console.log(`listening on port: ${PORT}`);
	
})