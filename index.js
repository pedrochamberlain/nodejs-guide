console.log('\n\nWelcome to Node!\n\n')

// GLOBAL
// Node has a global property named... global.

console.log(global.luckyNum) // undefined
global.luckyNum = '23'
console.log(global.luckyNum, '\n\n') // '23'


// PROCESS
// Node also has a global property called process, which gives you access to
// the currently running node process.
console.log(process.env.USER, 'is now using the system.')

// EVENTS
const { EventEmitter } = require('events')
const eventEmitter = new EventEmitter()

eventEmitter.on('lunch', () => {
    console.log('yum 🍔\n\n')
})

eventEmitter.emit('lunch')

// FILE SYSTEM
// Node has a built-in file system called FS that allows reading, writing and deleting files, among other things.
const { readFile, readFileSync } = require('fs')
console.time('ASYNCHRONOUS')
console.log('ASYNCHRONOUS – This console.log will print exactly before the example file starts being read.\n')
readFile('./10mb.txt', 'utf8', (err, txt) => {
    console.log('ASYNCHRONOUS – This console.log will print only after the example file is completely read.\n\n')
    console.timeEnd('ASYNCHRONOUS')
})


console.log('SYNCHRONOUS – This console.log will print exactly before the example file starts being read.')
console.time('SYNCHRONOUS')
readFileSync('./example.txt', 'utf8')
console.timeEnd('SYNCHRONOUS')
console.log('SYNCHRONOUS – This console.log will print after the example file starts being read, whether it has finished or not.\n')

// EXPRESS
// Express is a minimal web application framework for Node.
const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
    readFile('./home.html', 'utf8', (err, html) => {
        if (err) res.status(500).send('something went wrong.')

        res.send(html)
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})