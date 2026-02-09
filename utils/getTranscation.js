import fs from 'node:fs/promises'
import path  from 'node:path'

export async function getTransaction() {
    try {
        const pathTxt = path.join('data', 'transaction.txt')
        const data = await fs.readFile(pathTxt, 'utf8')
        return data

    } catch(err) {
        console.log(err)
        return
    }
}