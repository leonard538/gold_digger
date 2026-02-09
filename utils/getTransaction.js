import fs from 'node:fs/promises'
import path  from 'node:path'

export async function getTransaction() {
    try {
        const pathTxt = path.join('data', 'transaction.json')
        const data = await fs.readFile(pathTxt, 'utf8')
        // FIX: transaction.json is empty. JSON.parse('') throws "Unexpected end of JSON input".
        // Check if file is empty before parsing:
        // if (!data.trim()) return []
        if (!data.trim()) return []
        return JSON.parse(data)

    } catch(err) {
        console.log(err)
        return []
    }
}