const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')
const userRouter = require('./routes/users')
const sellerRouter = require('./routes/sellers')
const reviewRouter = require('./routes/reviews')
const orderRouter = require('./routes/orders')
const itemRouter = require('./routes/items')
const categoryRouter = require('./routes/categories')
const cartRouter = require('./routes/carts')

const app = express()
const apiPort = 8888

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/', userRouter)
app.use('/', sellerRouter)
app.use('/', reviewRouter)
app.use('/', orderRouter)
app.use('/', itemRouter)
app.use('/', categoryRouter)
app.use('/', cartRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))