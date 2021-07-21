// inputs and buttons
let bill = document.getElementById("bill");
let noOfPeople = document.getElementById("noOfPeople");
let customTip = document.getElementById("customTip");
let zeroAlert = document.getElementById("zero-alert");
let tipButtons = document.querySelectorAll("#select-tip-btn");

// display amount
let tipPerPerson = document.querySelector(".tip-amount-per-person");
let totalAmountPerPerson = document.querySelector(".total-amount-per-person");

// final amounts to calculate
let finalBill = []
let selectedTipPercentage = [];
let totalPeople = [];




bill.addEventListener("change", () => {
    finalBill.unshift(bill.value);
});

tipButtons.forEach((tip) => {
    tip.addEventListener("click", () => {
        
        customTip.value = "";

        let plainTip = tip.innerHTML.split("%");
        let tipNum = parseInt(plainTip);

        selectedTipPercentage.unshift(tipNum);
        console.log(selectedTipPercentage);
    });
});

customTip.addEventListener("change", () => {
    console.log(customTip.value);
    let plainCustomTip = customTip.value;
    let customTipNum = parseInt(plainCustomTip)
    selectedTipPercentage.unshift(customTipNum);

    console.log(typeof(selectedTipPercentage[0]));
});

noOfPeople.addEventListener("change", () => {
   

    console.log(noOfPeople.value);
    let plainNoOfPeople = noOfPeople.value;
    let noOfPeopleNum = parseInt(plainNoOfPeople);

    totalPeople.unshift(noOfPeopleNum);
    
    function percentage(num, per) {
        return (num/100) * per;
    }

    let totalTipAmount = percentage(finalBill[0], selectedTipPercentage[0]);

    let tipAmountPerPerson = totalTipAmount / totalPeople[0];
    let finalAmountPerPerson = tipAmountPerPerson + (finalBill[0] / totalPeople[0]);

    tipPerPerson.innerHTML = tipAmountPerPerson.toFixed(2);
    totalAmountPerPerson.innerHTML = finalAmountPerPerson.toFixed(2);

    if (noOfPeople.value === "0") {
        zeroAlert.classList.remove("active");
        tipPerPerson.innerHTML = "$0.00";
        totalAmountPerPerson.innerHTML = "$0.00";
   } else {
       zeroAlert.classList.add("active");
   }

    console.log( "total tip Amount is "+ totalTipAmount);
    console.log("tip amount per person is " + tipAmountPerPerson);
    console.log("Total Amount Per Person " + finalAmountPerPerson);
});

let resetBtn = document.getElementById("reset");

resetBtn.addEventListener("click", () => {
    bill.value = "";
    noOfPeople.value = "";
    tipPerPerson.innerHTML = "$0.00";
    totalAmountPerPerson.innerHTML = "$0.00";
});