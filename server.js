const express = require('express')
const path = require('path')
const Rollbar = reqruire('rollbar')

let rollbar = new Rollbar({

    accessToken: '',
    captureUncaught: true,
    catptureUnhandledRejections: true
})