import { HasFormatter } from "../interfaces/HasFormatter";

export class Payment implements HasFormatter{
    private recipient:string;
    readonly  details:string;
    amount:number;
    constructor(c:string,d:string,a:number){
        this.recipient=c
        this.details=d
        this.amount=a
    }

    format(){
        return `${this.recipient} owes €${this.amount} for ${this.details}`
    }
}