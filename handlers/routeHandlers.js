import { getTransaction } from "../utils/getTransaction.js"
import { sendResponse } from "../utils/sendResponse.js"
import { sanitizedInput } from "../utils/sanitizedInput.js"
import { parseJSONBody  } from "../utils/parseJSONBody.js"
import { addNewTransaction } from "../utils/addNewTransaction.js"

// FIX: handleGet returns transaction history, but index.js expects { goldPrice: currentPrice }.
// 1. Add 'currPrice' parameter: handleGet(res, currPrice)
// 2. Return the price: sendResponse(res, 200, 'application/json', { goldPrice: currPrice.toFixed(2) })
// 3. Update server.js to pass currentPrice: handleGet(res, currentPrice)
export async function handleGet(res, currPrice) {
    sendResponse(res, 200, 'application/json', { goldPrice: currPrice.toFixed(2)})
}

export async function handlePost(req, res, currPrice) {
    try {
        const body = await parseJSONBody(req)
        
        const record = {
            timestamp: body.timestamp,
            amountPaid: body.amountPaid,
            // FIX: 'goldPrice' key should be 'pricePerOz' to match addNewTransaction.js which expects 'newTrans.pricePerOz'
            pricePerOz: currPrice.toFixed(2),
            // FIX: 'amountPaid' and 'goldPrice' are undefined variables here.
            // Should use 'body.amountPaid' and 'currPrice' instead:
            // goldSold: (body.amountPaid / currPrice).toFixed(2)
            goldSold: (body.amountPaid / currPrice).toFixed(2)
        }
        
        const sanitizedBody = sanitizedInput(record)
        await addNewTransaction(sanitizedBody)
        sendResponse(res, 201, 'application/json', sanitizedBody)
    } catch(err) {
        sendResponse(res, 404, 'application/json', err.toString())
    }
}