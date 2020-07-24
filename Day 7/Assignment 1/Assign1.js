
const arr = ['green','orange','red','yellow']


function change(){
    let a = arr.shift()
    document.body.style.backgroundColor = a;
    if(arr.length){
        setTimeout(change,5000)
    }
}

change()