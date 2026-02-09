import { getTransaction } from "../utils/getTranscation"
import { sendResponse } from "../utils/sendResponse"
import { sanitizedInput } from "../utils/sanitizedInput.js"
import { parseJSONBody  } from "../utils/parseJSONBody.js"
import { addNewTransaction } from "../utils/addNewTransaction.js"

export async function handleGet(res) {
    const data = await getTransaction()
    sendResponse(res, 200, 'application/json', data)
}

export async function handlePost(req, res) {
    try {
        const body = await parseJSONBody(req)
        const sanitizedBody = sanitizedInput(body)
        await addNewTransaction(sanitizedBody)
        sendResponse(res, 201, 'application/json', sanitizedBody)
    } catch(err) {
        sendResponse(res, 404, 'application/json', err.toString())
    }
}