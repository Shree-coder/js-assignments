const student = {
    name: 'Helsinki',
    age : 24,
    projects:{
        diceGame: 'Two player dice game using JavaScript'
    }
}

//destructing above object

const {name,age,projects:{diceGame}} = student
console.log(name,age,diceGame); 



































