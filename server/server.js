const express = require('express')
const app = express()
const server = require('http').createServer(app)

const bodyParser = require('body-parser');
const reportRouter = require('./routers/report.router')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.use('/api', reportRouter)


app.use(express.static('build'))



const PORT = process.env.PORT || 5000

server.listen(PORT, () => {
	console.log(`listening on port: ${PORT}`);
	
})