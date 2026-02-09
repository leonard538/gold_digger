const form = document.getElementById('invest-form')

form.addEventListener('submit', async (e) => {
    e.preventDefault()

    const invest_amount = document.getElementById('investment-amount').value
    const invest_msg = document.getElementById('investment-message')
    const current_date = new Date() // get current datetime to store in transaction file
    
    // format date from date object to readable string
    const options = {
        timezone: 'Asia/Manila', 
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    }

    const readableDate = current_date.toLocaleString('en-PH', options)

    if(!invest_amount) {
        invest_msg.textContent = `Please enter an amount to invest!`
        return
    }

    const formData = {
        timestamp: readableDate,
        amountPaid: invest_amount,
        pricePerOz: '', // the gold price 
        goldSold: '' // the amount returned in ozGoldSold
    }

    try {
        // Send the investment data to the fetched API
        const res = await fetch('./api', {
            method: "POST", 
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(formData)
        })

        if(res.ok) {
            form.reset()
        } else {
            console.error(res.statusText)
        }
    } catch(err) {
        console.log('Error:', err)
    }
})