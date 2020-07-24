const id = document.querySelector('#num')
const button = document.querySelector('#btn')
const list = document.querySelector('#list')

// Algorithm:

// let a = ()=>{
//     for(let i=1;i<=10;i++){
//         console.log(`10 * ${i} = ${5*i}`)
//     }
// }

// a()

//function for inserting list into the list:

function insert(ele){
    return document.createElement(ele)
}

//getting the value form the input tag after clicking the button:


button.onclick = ()=>{
    let input = document.querySelector('#num').value
    for(let i=1;i<=10;i++){
        let a = insert('li')
        let b = list.appendChild(a)
        b.innerHTML =  (`${input} * ${i} = ${input*i}`)
    }
}