const express = require('express')
const router = express.Router()

let triplist = [
	'hah'
]

router.get('/get-all', (req, res) => {
	res.send(triplist)
})

router.post('/submit-tripreport', (req, res) => {
	triplist.push(req.body)
	res.sendStatus(200)
})

module.exports = router