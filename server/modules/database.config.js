const mongoose = require('mongoose')
const database = ''

mongoose.connect(`mongodb://localhost/${database}`, {useUnifiedTopology: true, useNewUrlParser: true})
.then(() => console.log('You are now inside the mainframe'))
.catch(err => console.log(`there was an err ${err}`))
