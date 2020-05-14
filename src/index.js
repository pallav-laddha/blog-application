const express = require('express')
const path = require('path')

const app = express()
const port = process.env.port || 3000

const pathDirPath = path.join(__dirname, '../public')

app.use(express.static(pathDirPath))

app.listen( port, () => {
    console.log('Server is up at port ' , port)
})