const bill = document.getElementById("bill");
const custom = document.getElementById("custom");
const tipbtn = document.querySelectorAll(".left-box-btn button");
const people = document.getElementById("people");
const tipamount = document.getElementById("tipamount");
const totalamt = document.getElementById("totalamt");
const reset = document.getElementById("reset");
const validity = document.getElementById("validity");

tipamount.value = "$0.00";
totalamt.value = "$0.00";


//!limiting the user input
bill.addEventListener("input", function () {
  if (this.value.length > 10) {
    this.value = this.value.slice(0, 10);
  }
});
people.value = 1;
people.addEventListener("input", function () {
  if (this.value.length > 2) {
    this.value = this.value.slice(0, 2);
  }
  if(this.value < 0){
    this.value = 0;
  }
  if(this.value == 0){
    validity.innerText = "Cannot be zero";
    validity.style.color = "tomato";
    people.style.border ="tomato 2.5px solid";
  }
  else{
    validity.innerText = "";
    people.style.border = "";
  }
});
custom.addEventListener("input", function () {
  if (this.value.length > 2) {
    this.value = this.value.slice(0, 2);
  }
  if (this.value < 0) {
    this.value = 0;
  }
});

localBillValue = Number(bill.value);
localPeopleCount = Number(people.value);



let localBtn;
let local = 0;


  localBtn = Array.from(tipbtn);
  localBtn.forEach((btn) => {
    btn.addEventListener("click", function () {
      localBtn.forEach((btns) => btns.classList.remove("active"));
      local = btn.value;
      btn.classList.add("active");
      tipCalculation();
    });
  });



function tipCalculation() {
  localBillValue = Number(bill.value);
  localPeopleCount = Number(people.value);

  let wholeTipAmount;
  let wholeTipByPerson;
  let wholeAmtPerPerson;


  wholeTipAmount = localBillValue * (local / 100);
  wholeTipByPerson = (wholeTipAmount / localPeopleCount).toFixed(2);
  wholeAmtPerPerson = (
    (localBillValue + wholeTipAmount) /
    localPeopleCount
  ).toFixed(2);

  tipamount.value = `$ ${wholeTipByPerson}`;
  totalamt.value = `$ ${wholeAmtPerPerson}`;
}

bill.addEventListener("input", tipCalculation);
people.addEventListener("input", tipCalculation);
custom.addEventListener("input",function(){
  local = Number(custom.value);
  tipCalculation();
})
reset.onclick = function(){
  bill.value="";
  people.value= 1;
  custom.value= "";
  localBtn.forEach((btns) => btns.classList.remove("active"));
  tipamount.value = "$0.00";
  totalamt.value = "$0.00";
  validity.innerText = "";
  people.style.border = "";
}