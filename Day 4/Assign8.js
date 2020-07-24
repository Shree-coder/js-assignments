console.log('Arrow function')

let ask = (que,yes,no)=>{
    if(confirm(que)){
        yes()
    }
    else{
        no()
    }
}

let question = "Do you Agree?"
let yes = ()=>{
    alert('Yes Agreed')
}

let no = ()=>{
    alert('You canceled the execution.')
}

ask(question,yes,no)

