const express = require('express')
const path = require('path')
const Rollbar = require('rollbar')

let rollbar = new Rollbar({
    accessToken: 'dc7aa4c26c394a908012ba85fdb5a917',
    captureUncaught: true,
    catptureUnhandledRejections: true
});

// rollbar.log("Hello world");

const app= express()
app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
    rollbar.info('html file served successfully')
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/styles.css'))
    rollbar.info('styling successfully connected')
})

app.use(rollbar.errorHandler())

const port= process.env.PORT || 4545

app.listen(port, () => console.log( `Take us to warp ${port}!`))


