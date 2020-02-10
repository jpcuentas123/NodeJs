const Sum = (num1, num2) =>  {return num1 + num2 }
const PI = 3.16

class SomeMathObject{
    constructor(){
        console.log('Object created');
    }
}

module.exports= {
    Sum: Sum,
    PI: PI,
    SomeMathObject: SomeMathObject
}

