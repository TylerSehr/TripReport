const express = require('express')
const router = express.Router()

let triplist = [
	
]

router.get('/trips', (req, res) => {
	res.send(triplist)
})

router.post('/submit-trip', (req, res) => {
	triplist.push(req.body)
	res.sendStatus(200)
})

module.exports = router