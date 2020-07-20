let salary = prompt(`Enter the salary of the employee: `)

let percentage=function(num1,num2){
    return (num1/100)*num2
}

if(salary<=5000){
    console.log(`Total commision earned by the employee: ${percentage(+salary,2)}
Salary of the Employee: ${salary}
Total paid to the employee: ${+salary + percentage(+salary,2)} `)
}
else if(salary>=5001 && salary<=10000){
    console.log(`Total commision earned by the employee: ${percentage(+salary,5)}
Salary of the Employee: ${salary}
Total paid to the employee: ${+salary + percentage(+salary,5)} `)
}
else if(salary>=10001 && salary<=20000){
    console.log(`Total commision earned by the employee: ${percentage(+salary,7)}
Salary of the Employee: ${salary}
Total paid to the employee: ${+salary + percentage(+salary,7)} `)

}
else{
    console.log(`Total commision earned by the employee: ${percentage(+salary,10)}
Salary of the Employee: ${salary}
Total paid to the employee: ${+salary + percentage(+salary,10)} `)
}