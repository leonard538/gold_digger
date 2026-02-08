// 1. import necessary libraries and basta
import http from 'node:http'
// 2. define yung PORT
const PORT = 8000
// 3. define directory
const __dirname = import.meta.dirname
console.log(__dirname)
    // 3.1 define directory to index.html

// 4. create the server
const server = http.createServer( (req, res) => {
    // 5. define content-type, status code, and payload
    res.statusCode = 200
    res.setHeader('Content-Type', 'test/html')
    res.end()
})


// 6. build the server to the network
server.listen(PORT, () => { console.log(`Connected on port: ${PORT}`)})