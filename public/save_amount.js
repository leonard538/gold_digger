const form = document.getElementById('invest-form')
// FIX: 'invesment-summary' is misspelled - should be 'investment-summary' (missing 't')
const invest_summary = document.getElementById('investment-summary')
// FIX: 'dialog' is used on line 47 and 62 but never defined.
// Add: const dialog = document.querySelector('dialog')
const dialog = document.querySelector('dialog')
const closebtn = document.getElementById('close-dialog')

form.addEventListener('submit', async (e) => {
    e.preventDefault()

    const invest_amount = document.getElementById('investment-amount').value
    const invest_msg = document.getElementById('investment-message')
    const current_date = new Date() // get current datetime to store in transaction fil

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
        amountPaid: invest_amount
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
        const data = await res.json()
        invest_summary.textContent = `
            You just bought ${data.goldSold} ounces (ozt) for ₱${data.amountPaid}. \n You will receive documentation shortly.
        `
        dialog.showModal()

        if(res.ok) {
            form.reset()
        } else {
            console.error(res.statusText)
        }

    } catch(err) {
        console.log('Error:', err)
    }
})

closebtn.addEventListener("click", () => {
    dialog.close()
})