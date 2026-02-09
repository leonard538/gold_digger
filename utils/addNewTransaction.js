import { getTransaction  } from "./getTranscation"
import path from 'node:path'
import fs from 'node:fs/promises'

export async function addNewTransaction(newTrans) {
    try {
        const transactions = await getTransaction()

        // Appending new transactions at the top
        const updatedTransactions = `${newTrans.timestamp}, amount paid: ₱${newTrans.amountPaid}, 
                        price per Oz: ₱${newTrans.pricePerOz}, gold sold: ${newTrans.goldSold} Oz\n` + transactions

        const transFilePath = path.join('data', 'transaction.txt')
        await fs.writeFile(
            transFilePath, 
            updatedTransactions,
            'utf8'
        )
    } catch(err) {
        throw new Error(err)
    }
}