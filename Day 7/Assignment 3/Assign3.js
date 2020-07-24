const head = document.querySelector('#head')
const button = document.querySelector
('#darkmode')
const t = document.getElementById('time')
const d = document.getElementById('date1')


//Dark Mode
button.onclick = ()=>{
    document.body.style.backgroundColor = 'black'
    document.body.style.color = 'white'
}


//Showing Clock
function t1(){
    let date = new Date();
    let hms = date.toLocaleTimeString()
    let dt = date.toLocaleDateString()
    d.innerText = dt
    t.innerText = hms
}

setInterval(t1,1000);


//Welcoming user entering the web page by its input name
let name1 = prompt('Enter your name: ')
head.innerText += ` ${name1} to the web page`