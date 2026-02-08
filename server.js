// 1. import necessary libraries and basta
import http from 'node:http'
import path from 'node:path'
import fs from 'node:fs/promises'
import { getContentType } from './utils/getContentType.js'

// 2. define yung PORT
const PORT = 8000

// 3. define directory
const __dirname = import.meta.dirname

// 4. create the server
const server = http.createServer( async (req, res) => {
    // 4.1 define directory to index.html
    const publicDir = path.join(__dirname, 'public')
    const filepath = path.join(publicDir, 
        req.url === '/' ? 'index.html' : req.url        
    )
    console.log(req.url)
    // get the extension name of the directory
    const ext = path.extname(filepath)
    const contentType = getContentType(ext)
    
    try {
        // 4.2 read the content from the directory/file
        const content = await fs.readFile(filepath) 

        // 5. define content-type, status code, and payload
        res.statusCode = 200
        res.setHeader('Content-Type', contentType)
        res.end(content)

    } catch(err) {
        console.log(`File not found: ${req.url}`)
        res.statusCode = 404
        res.end('Not found')
    }
    
})


// 6. build the server to the network
server.listen(PORT, () => { console.log(`Server running at: http://localhost:${PORT}`)})