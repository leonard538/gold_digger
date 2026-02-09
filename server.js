// import necessary libraries and basta
import http from 'node:http'
import { handleGet, handlePost } from './handlers/routeHandlers.js'
import { goldPriceGenerator } from './utils/goldPriceGenerator.js'
import { serveStatic } from './utils/serveStatic.js'

// define yung PORT
const PORT = 8000

// define directory
const __dirname = import.meta.dirname

// generate gold price 
const goldPrice = new goldPriceGenerator()
let currentPrice = goldPrice.nextPrice()

setInterval(() => {
    currentPrice = goldPrice.nextPrice()
}, 2000);

// create the server
const server = http.createServer( async (req, res) => {
    if(req.url === '/api') {
        if(req.method === 'GET') {
            // FIX: Pass currentPrice to handleGet so it can return { goldPrice: currentPrice }
            // return await handleGet(res, currentPrice)
            return await handleGet(res, currentPrice)
        } else if(req.method === 'POST') {
            handlePost(req, res, currentPrice)
        }
    } else if(!req.url.startsWith('/api')) {
        return await serveStatic(req, res, __dirname)
    }

    // } catch(err) {
    //     console.log(`File not found: ${req.url}`)
    //     res.statusCode = 404
    //     res.end('Not found')
    // }
    
})


// build the server on the network
server.listen(PORT, () => { console.log(`Server running at: http://localhost:${PORT}`)})