function addNumbers(num1:number,num2:number) : number{ 
    return num1+num2;
}

function addNumbers2(num1:number,num2?:number) : number{ 
    if(typeof num2 ==  "undefined"){
        return num1;
    }
    return num1+num2;
}

function addNumbers3(num1:number,num2:number = 100) : number{
    return num1+num2;
}

function addNumbers4(num1:number,num2:number) :void { 
    console.log("Geri Donus Yok")
}


console.log(addNumbers(5,88));
console.log(addNumbers2(88));
console.log(addNumbers3(34));