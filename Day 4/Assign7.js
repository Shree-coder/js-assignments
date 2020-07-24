

//function to check prime number
function PrimeChk(num){
    for(i=2;i<num;i++){
        if(num%i==0){
            return true
        }
    }
    return false
}

//function to print prime numbers within a interval
function interval(n){
    let a = []
    for(let j=2;j<n;j++){
        if(!PrimeChk(j)){
            a.push(j)
        }
        else{
            continue
        }
    }
    console.log(a)
}


//accept interval value from the user
let input = prompt('Enter no. upto which you want the pime nos.')
interval(input)
alert('Please check the console for result!!!')