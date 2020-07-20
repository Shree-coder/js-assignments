console.log('Welcome to JS Calculator')

let user = 'yes'
while(user=='yes')
{
let a = prompt(`Which operation you wnat to perform:
\n1.Additon\n2.Subtraction\n3.Multiplication\n4.Division\n5.Squareroot\n6.Percenatge`)

if(a==5){
    let sqr = prompt('Squareroot of which value: ')
    console.log(`Squareroot: ${Math.sqrt(sqr)}`);
}
else if(a==6){
    let per1 = prompt('Percentage of which number: ')
    let per2 = prompt('How much percentage of the given number: ')
    console.log(`Percentage: ${(per1/100)*per2}`);
}
else if(a==1){
    let b=prompt('Number 1:')
    let c=prompt('Number 2:')
    parseInt(b)
    console.log(`Addition: ${+b + +c}`);
}
else if(a==2){
    let b=prompt('Number 1:')
    let c=prompt('Number 2:')
    console.log(`Subtraction: ${Math.abs(b-c)}`);
}
else if(a==3){
    let b=prompt('Number 1:')
    let c=prompt('Number 2:')
    console.log(`Multiplication: ${+b * +c}`);
}
else if(a==4){
let b=prompt('Number 1:')
let c=prompt('Number 2:')
console.log(`Division: ${+b / +c}`);
}
else{
    console.log('Wrong value!!!');
}
user = prompt("Do you want to claculate again\nyes/no")
}
