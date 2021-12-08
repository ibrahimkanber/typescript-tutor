import { Invoice } from "./classes/Invioce.js";
import { Payment } from "./classes/Payments.js";
let docOne;
let docTwo;
docOne = new Invoice("ibo", "web work", 250);
docTwo = new Payment("ibo", "web work", 200);
let docs = [];
docs.push(docOne, docTwo);
const me = { name: "ibrahim", age: 28, speak() { console.log("test"); }, spend() { return 5; } };
const invOne = new Invoice("mario34", "work", 250);
console.log(invOne.details);
const invoices = [];
invoices.push(invOne);
const anchor = document.querySelector("a");
//console.log(anchor.href)
//casting
const form = document.querySelector(".new-item-form");
const amount = document.querySelector("#amount");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const type = document.querySelector("#type");
form.addEventListener("submit", (e) => {
    let doc;
    e.preventDefault();
    if (type.value === "invoice") {
        console.log('here');
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        console.log('here 2');
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log('doc', doc);
});
//console.log(amount.value)
// !!!!
//console.log(amount.valueAsNumber)
