
let a = prompt("enter an positive number: ")
let b=[]
if(+a>0){
    for(let i=0;i<a;i++){
        b.push(i+1)
    }
    let odd = b.filter(el=>el%2!=0).map(el=>el**3)
    console.log(odd)
}
else{
    alert("wrong input")
}





