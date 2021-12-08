import { Invoice } from "./classes/Invioce.js"
import { Payment } from "./classes/Payments.js"
import {HasFormatter} from "./interfaces/HasFormatter"
interface IsPerson{
    name:string
    age:number
    speak(a:string):void
    spend(a:number):number
}

let docOne:HasFormatter;
let docTwo:HasFormatter;

docOne=new Invoice("ibo","web work",250)
docTwo=new Payment("ibo","web work",200)

let docs:HasFormatter[]=[]
docs.push(docOne,docTwo)

const me:IsPerson={name:"ibrahim",age:28,speak(){console.log("test")},spend(){return 5}}

const invOne=new Invoice("mario34","work",250)
console.log(invOne.details)
const invoices:Invoice[]=[]
invoices.push(invOne)

const anchor=document.querySelector("a")!

//console.log(anchor.href)
//casting
const form=document.querySelector(".new-item-form") as HTMLFormElement
const amount=document.querySelector("#amount") as HTMLInputElement
const tofrom=document.querySelector("#tofrom") as HTMLInputElement
const details=document.querySelector("#details") as HTMLInputElement
const type=document.querySelector("#type") as HTMLSelectElement

form.addEventListener("submit",(e:Event)=>{
    let doc:HasFormatter;
    e.preventDefault();
    if(type.value==="invoice"){
        console.log('here')
        doc=new Invoice(tofrom.value,details.value,amount.valueAsNumber)
    }else{
        console.log('here 2')
        doc=new Payment(tofrom.value,details.value,amount.valueAsNumber)
    }
    console.log('doc',doc)
})
//console.log(amount.value)
// !!!!
//console.log(amount.valueAsNumber)