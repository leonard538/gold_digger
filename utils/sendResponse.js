export function sendResponse(res, statusCode, contentType, payload) {
    res.statusCode = statusCode
    res.setHeader("Content-Type", contentType)
    // FIX: Buffer is also an 'object' in JS, so we must check for Buffer first.
    // Only stringify plain objects (for JSON responses), but pass Buffers/strings directly.
    // Use: res.end(Buffer.isBuffer(payload) ? payload : (typeof payload === 'object' ? JSON.stringify(payload) : payload))
    res.end(Buffer.isBuffer(payload) ? payload : (typeof payload === 'object' ? JSON.stringify(payload) : payload))
}