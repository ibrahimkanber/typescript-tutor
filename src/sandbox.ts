//explicit types
let character:string;
let age:number;
//arrays
let ninjas:string[];

//union types
let mixed :(string|number)[]=["ibo"]

let uid:string|number;
uid=5

// objects
let ninjaOne:object;
ninjaOne={name:'ibo'}
ninjaOne={age:29}
//---!!! arrays are also kind of object
ninjaOne=[] 

console.log("test");



//FUNCTIONS
let greet:Function;
greet=()=>{console.log("helloo")}

const add=(a:number,b:number,c:number|string=10):number=>{
    console.log('test')
    return a+b
}

add(5,7)


///FUNCTION SIGNATURE

let calc:(a:number,b:number,c:string)=>number;

calc=(numOne:number,numTwo:number,action:string)=>{
    if(action==="add"){
        return numOne+numTwo
    }
    return numOne-numTwo
}




