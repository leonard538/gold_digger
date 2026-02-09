import fs from 'node:fs/promises'
import path from 'node:path'
import { sendResponse } from './sendResponse.js'
import { getContentType } from './getContentType.js'

export async function serveStatic(req, res, baseDir) {
    const publicDir = path.join(baseDir, 'public')
    const filepath = path.join(publicDir, 
        req.url === '/' ? 'index.html' : req.url
    )

    const ext = path.extname(filepath)
    const contentType = getContentType(ext)

    try {
        const content = await fs.readFile(filepath)
        sendResponse(res, 200, contentType, content)
    } catch(err) {
        if(err.code === 'ENOENT') {
            const content = await fs.readFile(path.join(publicDir, '404.html'))
            sendResponse(res, 404, 'text/html', content)
        } else {
            // FIX: This uses single quotes, so ${err.code} won't interpolate.
            // Use backticks (template literal) instead: `<html><h1>Server Error: ${err.code}</h1></html>`
            sendResponse(res, 500, 'text/html', `<html><h1>Server Error: ${err.code}</h1></html>`)
        }
    }
}