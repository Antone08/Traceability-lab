const express = require('express')
const path = require('path')
const Rollbar = reqruire('rollbar')

let rollbar = new Rollbar({

    accessToken: 'dc7aa4c26c394a908012ba85fdb5a917',
    captureUncaught: true,
    catptureUnhandledRejections: true
})