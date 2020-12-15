const conv = document.getElementById('btn')
conv.addEventListener('click' ,()=>{
const from = document.getElementById("from_currency").value 
const to_curr = document.getElementById('to_currency').value
const amount = document.getElementById('amount').value
    fetch(`https://api.exchangerate-api.com/v4/latest/${from}`)
		.then(res => res.json())
		.then(res => {
            let rate = res.rates[to_curr];
            var final_amount = amount*rate;
            document.getElementById("result").innerText = `1 ${from} = ${rate} ${to_curr}
                                                            ${amount} ${from} = ${final_amount} ${to_curr}`
        })
        
		
})  