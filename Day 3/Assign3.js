//input marks from user

let a = prompt("Enter the marks")

//using conditional statement

if(a>50)
{
    console.log(`Marks are ${a} and grade is A`)
}
else if(a<50)
{
    console.log(`Marks are ${a} and grade is C`)
}
else
{
    console.log(`Marks are ${a} and grade is B`)

}

//using switch statement 

switch(parseInt(a))
{
    case 50:
        console.log(`Marks are ${a} and grade is B`)
        break;
    default:
        console.log(`Marks are ${a} and grade is C`)
}

//using ternary operation

let b = parseInt(a);
console.log(b>50?`Marks are ${b} and grade is A`:
b<50?`Marks are ${b} and grade is C`:
`Marks are ${b} and grade is B`)
