const priceDisplay = document.getElementById('price-display')

async function fetchPrice() {
    try {
        const res = await fetch('api')
        const data = await res.json()

        priceDisplay.textContent = data.goldPrice

        
    } catch(err) {
        console.error(`Error to fetch price: ${err}`)
    }
}

setInterval(fetchPrice, 2000)

fetchPrice()