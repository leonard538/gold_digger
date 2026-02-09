import { getTransaction  } from "./getTransaction.js"
import path from 'node:path'
import fs from 'node:fs/promises'

export async function addNewTransaction(newTrans) {
    try {
        const transactions = await getTransaction()
        transactions.push(newTrans)
        // Appending new transactions at the top for text file
        const updatedTransactions = `${newTrans.timestamp}, amount paid: ₱${newTrans.amountPaid}, price per Oz: ₱${newTrans.pricePerOz}, gold sold: ${newTrans.goldSold} Oz\n`

        const transFilePathTxt = path.join('data', 'transaction.txt')
        const transFilePathJSON = path.join('data', 'transaction.json')
        await fs.appendFile(
            transFilePathTxt, 
            updatedTransactions,
            'utf8'
        )

        await fs.writeFile(
            transFilePathJSON,
            JSON.stringify(transactions, null, 2),
            'utf8'
        )
    } catch(err) {
        throw new Error(err)
    }
}