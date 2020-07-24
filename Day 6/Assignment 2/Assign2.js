const id = document.querySelector('#num')
const button = document.querySelector('#btn')
const list = document.querySelector('#list')


function insert(ele){
    return document.createElement(ele)
}

//getting the value from the input tag after clicking the button:


button.onclick = ()=>{
    let input = document.querySelector('#num').value
    for(let i=1;i<=10;i++){
        let a = insert('li')
        let b = list.appendChild(a)
        b.innerHTML =  (`${input} * ${i} = ${input*i}`)
    }
}