
const seats = document.getElementsByClassName('seat');
const availableSeat = document.getElementById('availableSeat');
const total = document.getElementById('total')

let seatCount = 0;
let totalTk = 0
for (const seat of seats) {
    seat.addEventListener('click',function(e){

        seat.style.backgroundColor= '#1DD100';

        const tbody = document.querySelector('tbody');
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${e.target.innerText}</td>
            <td>Economics</td>
            <td>550</td>
        `
        tbody.appendChild(tr);


        seatCount++
        totalTk = totalTk + 550;
        seat.disabled = true
        

        availableSeat.innerText = seatCount;
        total.innerText = totalTk


        if(seatCount === 4){
    for (const seat of seats) {
        seat.disabled = true
    console.log('reach out')
    }
    
}
        
    })
}





