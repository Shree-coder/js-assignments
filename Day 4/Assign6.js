let a = prompt("enter the numbber greater than 100")
if(+a<100 && a.length != 0 ){
    while(a < 100 ){
        alert(`Number: ${a} smaller than 100. Enter again`)
        a = prompt("enter the number greater than 100")
    }
    alert(`${a} is greater than 100!!!`)
}
else if(+a>100 && a.length != 0 ){
    alert(`${a} is greater than 100!!!`)
}
else{
    alert('Wrong input')
}