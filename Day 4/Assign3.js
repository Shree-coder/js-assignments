let shoppingList = ['bread','milk','cheese','juice'];

//copying the shoppingList array to shoppingBasket array
let shoppingBasket = [...shoppingList]

//add new element sin the shoppingBasket array
let c = []
let a = prompt('How many elements you want to add to the basket')
for(let i=0;i<a;i++){
    let b=prompt('Enter the item name: ')
    shoppingBasket.push(b)
    c=[...shoppingBasket]
}
console.log(c)