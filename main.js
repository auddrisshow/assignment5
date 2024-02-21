document.getElementById('scrollBtn').addEventListener('click', function() {
    const mainSection = document.getElementById('mainSection');
    if (mainSection) { 
        mainSection.scrollIntoView({behavior: 'smooth'});
    }
});

let totalCost = 0;
let clickedButtons = 0;

const allSeat = document.querySelectorAll('.seat');

const phoneNum = document.getElementById('phoneNumber');
const nextButton = document.getElementById('nextBtn');
const applyButton = document.getElementById('applyBtn');
nextButton.disabled = true;
applyButton.disabled = true;

for (const chair of allSeat) {
    chair.addEventListener('click', function () {
        if (clickedButtons < 4) {
            const chairNumber = chair.textContent;

            const ticketCost = document.getElementById('ticketPrice');
            const price = parseFloat(ticketCost.innerText.split(' ')[0]);

            const busClass = 'AC_Business';

            const selectedChair = document.getElementById('selectedSeat');
            const p = document.createElement('p');

            const seatSpan = document.createElement('span');
            seatSpan.textContent = chairNumber;

            const classSpan = document.createElement('span');
            classSpan.textContent = busClass;

            const priceSpan = document.createElement('span');
            priceSpan.textContent = price.toFixed(2) + 'Taka';

            p.style.display = 'flex';
            p.style.justifyContent = 'space-between';
            p.style.margin = '10px 0';

            p.appendChild(seatSpan);
            p.appendChild(classSpan);
            p.appendChild(priceSpan);

            selectedChair.appendChild(p);

            chair.style.backgroundColor = 'green';
            chair.style.color = 'white';

            chair.disabled = true;
            totalCost += price;

            const totalCostArea = document.getElementById('totalPrice');
            totalCostArea.innerText = totalCost.toFixed(2);

            const grandTotalArea = document.getElementById('grandTotal');
            grandTotalArea.innerText = totalCost.toFixed(2);

            let ticketQuantity = ++clickedButtons;

            const selectedTicketCount = document.getElementById('selectedSeatCount');
            selectedTicketCount.innerText = ticketQuantity;

            const totalChairQuantity = 28;
            let result = totalChairQuantity - ticketQuantity;
            const leftOverSeat = document.getElementById('totalSeat');
            leftOverSeat.innerText = result;

            
            const input = document.getElementById('phoneNumber').value.length
            if(input > 0){
            nextButton.disabled = false;

        }

            if (clickedButtons === 4) {
                alert('YOU CAN BUY 4 TICKETS ONLY AND YOU CAN NOT CROSS YOUR LIMIT');
                applyButton.disabled = false;
            }

            if ( clickedButtons === 4) {
                for ( const seat of allSeat) {
                    if  (!seat.disabled) {
                        seat.disabled = true;
                    };
                };
            };

        };
    });
};

document.getElementById('phoneNumber').addEventListener('keyup', function () {

    if (this.value.length  > 0 && totalCost > 0){
        nextButton.disabled = false;

}
else { 
    nextButton.disabled = true;
}
});

document.getElementById('applyBtn').addEventListener('click' , function () {
    const d15 = document.getElementById('discount15');
    const dis15 = d15.innerText;
    
    const d20 = document.getElementById('discount20');
    const dis20 = d20.innerText;

    const couponValue = document.getElementById('discountInput');
    const couponText = couponValue.value.trim();

    const areaOfGrandTotal = document.getElementById('grandTotal');
    const endTotal = parseInt(areaOfGrandTotal.innerText); 

    const discountAmount = document.getElementById('discountPrice')

    let finalPrice = 0;

    if (dis15 === couponText) {

        const discount1 = endTotal * (15 / 100);
        finalPrice = endTotal - discount1;
        discountAmount.innerText = discount1.toFixed(2);
        areaOfGrandTotal.innerText = finalPrice.toFixed(2);
    }
    else if (dis20 === couponText) {
        const discount2 = endTotal * (20 / 100);
        finalPrice = endTotal - discount2;
        discountAmount.innerText = discount2.toFixed(2);
        areaOfGrandTotal.innerText = finalPrice.toFixed(2);
    }
    else {
        alert('Invalid Coupon');
    }
    

    const hideCouponArea = document.getElementById('couponArea');
    if (hideCouponArea) {
        hideCouponArea.style.display = 'none';
    }
    

});
document.getElementById('continueBtn').addEventListener('click', function () {
    window.location.reload();
});