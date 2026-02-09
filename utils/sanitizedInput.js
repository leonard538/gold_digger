import sanitizeHtml from "sanitize-html";

// FIX: sanitizeHtml() expects a string, but 'data' is an object.
// You need to sanitize each string property individually, e.g.:
// return {
//     timestamp: sanitizeHtml(data.timestamp, { allowedTags: [], allowedAttributes: {} }),
//     amountPaid: data.amountPaid,  // number, no need to sanitize
//     pricePerOz: data.pricePerOz,  // number, no need to sanitize
//     goldSold: data.goldSold       // number, no need to sanitize
// }
// FIX: Currently returns only a string (sanitized timestamp), not the full object.
// addNewTransaction expects an object with .timestamp, .amountPaid, .pricePerOz, .goldSold
// This causes the error because newTrans.timestamp etc. are undefined.
export function sanitizedInput(data) {
    const sanitizedData = {
        timestamp: sanitizeHtml(data.timestamp, {
                    allowedTags: [], 
                    allowedAttributes: {}
                }),
        amountPaid: data.amountPaid,
        pricePerOz: data.pricePerOz,
        goldSold: data.goldSold
    }

    return sanitizedData
}