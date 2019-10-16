const coffee = [...document.getElementsByClassName('coffee')];
const chosenDrink = document.getElementById('chosenDrink');
const newDrink = document.getElementById('drinkName');
const addMoreMilk = document.getElementById('addMoreMilk');
const cherrySyrop = document.getElementById('cherrySyrop');
const cancel = document.getElementById('cancelButton');
const order = document.getElementById('myOrder');
const cherry = document.getElementById('cherryBonus');
const milk = document.getElementById('Milk');
const price = document.getElementById('finalPrice');
const progressBar = document.getElementById('coffee-progress');

console.log(coffee);

let additives = {
    milk: 0,
    cherry: 0
}

const medium_cup = {
    size: 250,
    count: 5
}

const large_cup = {
    size: 380,
    count: 6
}

let startProcess = 0;
let myPrice = 0;
let coffeeSize = 0;

const menu = [
    {
        name: "Эспрессо",
        price: 90,
        size: 100,
        type: 'simple'
    },
    {
        name: "Латте",
        price: 130,
        size: 250,
        type: 'simple'
    },
    {
        name: "Капучино",
        price: 110,
        size: 250,
        type: 'simple'
    },
    {
        name: "Банановый латте",
        price: 150,
        size: 300,
        type: 'author'
    },
    {
        name: "Ванильный капучино",
        price: 150,
        size: 300,
        type: 'author'
    },
    {
        name: "Флэт уайт",
        price: 100,
        size: 280,
        type: 'author'
    },
    {
        name: "Молоко",
        price: 25,
        size: 50,
        type: 'syrop'
    },
    {
        name: "Вишневый сироп",
        price: 35,
        size: 50,
        type: 'syrop'
    }
]



order.addEventListener('click', function(){
    if (order.classList.contains('youNeedToDoOrder') || order.classList.contains('orderDone')) {
        coffeeProgress(60);
    }
});

function coffeeProgress(time) {
    let start = 0;
    const interval = setInterval(function(){
        if (start > 100) {
            clearInterval(interval);
        } else {
            progressBar.value = start;
        }
        start++;
    }, time);
    
    chosenDrink.innerHTML = '';
    cherrySyrop.innerHTML = '';
    newDrink.innerHTML = '';
    price.innerHTML = '';
    cherry.classList.remove('orderDone');
    cherry.classList.remove('fullSize');
    order.classList.remove('orderDone');
    order.classList.remove('youNeedToDoOrder');
    milk.classList.remove('notSimple');
    additives.milk = 0;
    additives.cherry = 0;
    myPrice = 0;
    startProcess = 0;
    coffeeSize = 0;
}

function getPrice(elem) {
    price.innerHTML = '';
    menu.forEach(function(el){
        if (el.name == elem.innerText) {
            
            const showPrice = document.createElement('p');
            showPrice.innerHTML = `${el.price}`;
            price.append(showPrice);
            myPrice = el.price;
            
            coffeeSize = el.size;
            
            console.log('объем напитка');
            console.log(coffeeSize);
        }  
    });
}

function checkType(elem) {
    menu.forEach(function(el){
        if (el.name == elem.innerText) {
            if (el.type == 'author') {
                milk.classList.add('notSimple');
                cherry.classList.remove('orderDone');
            } else {
                cherry.classList.add('orderDone');
                milk.classList.remove('notSimple');
            }
        }  
    });
}

//function newOrder() {
//    order.addEventListener('click', function(){
//        if (order.classList.contains('youNeedToDoOrder')) {
//            
//            console.log('заказ на 8 секунд пошёл пошел');
//            
//        } else if (order.classList.contains('orderDone')) {
//            console.log('заказ на 5 секунд пошёл пошел');
//        }
//    });
//}
//
//newOrder();


function cancelOrder() {
    cancel.addEventListener('click', function(){
        chosenDrink.innerHTML = '';
        cherrySyrop.innerHTML = '';
        newDrink.innerHTML = '';
        price.innerHTML = '';
        cherry.classList.remove('orderDone');
        cherry.classList.remove('fullSize');
        order.classList.remove('orderDone');
        order.classList.remove('youNeedToDoOrder');
        milk.classList.remove('notSimple');
        additives.milk = 0;
        additives.cherry = 0;
        myPrice = 0;
        startProcess = 0;
        coffeeSize = 0;
    })
}

cancelOrder();


coffee.forEach(function(elem){
    elem.addEventListener('click', function(){
        
        progressBar.value = '';
        
       if ((this.innerText == 'Молоко') && (newDrink.innerHTML == '')) {
            chosenDrink.innerHTML = '';
            cherrySyrop.innerHTML = '';
            
            newDrink.innerHTML = `${this.innerText}`;
            chosenDrink.append(newDrink);
            
            getPrice(elem);
            checkType(elem);
            

            order.classList.add('orderDone');
            
            additives.milk = 0;
            additives.cherry = 0; 
            startProcess = 1;
         
            
        } else if ((this.innerText == 'Молоко') && (newDrink.innerHTML != '') && (milk.classList.contains('notSimple') == false)) {
    
            
            additives.milk++;
            addMilk = document.createElement('p');

            if (newDrink.innerHTML == 'Молоко') {
                addMilk.innerHTML = '&nbsp' + `[x${additives.milk}]`;
            } else {
            addMilk.innerHTML = '&nbsp' + `с молоком [x${additives.milk}]`;
            }

            if (chosenDrink.childNodes.length > 1) {
                chosenDrink.lastChild.remove();
                chosenDrink.append(addMilk);
            }

            chosenDrink.append(addMilk);

            price.innerHTML = '';
            menu.forEach(function(el){
                if (el.name == elem.innerText) {
                    const showPrice = document.createElement('p');
                    myPrice = myPrice + el.price;
                    showPrice.innerHTML = `${myPrice}`;
                    price.append(showPrice);


                    coffeeSize = coffeeSize + el.size;
                    console.log('объем напитка');
                    console.log(coffeeSize);

                    if (
                        (((coffeeSize + 50) > large_cup.size)) || (((coffeeSize + 50) > medium_cup.size) && (large_cup.count == 0))
                    ) {
                        milk.classList.add('notSimple');
                        cherry.classList.remove('orderDone');
                        cherry.classList.add('fullSize');
                        order.classList.remove('orderDone');
                        order.classList.add('youNeedToDoOrder');
                    }
                }
            });

            
        } else if ((this.innerText != 'Вишневый сироп') && (this.innerText != 'Молоко')) {
            
            menu.forEach(function(el){
                if (el.name == elem.innerText) {
                    if (el.type == 'author') {
                        startProcess = 0;  
                    } else {
                        startProcess = 1;  
                    }
                }  
            });
            
            chosenDrink.innerHTML = '';
            cherrySyrop.innerHTML = '';
            
            newDrink.innerHTML = `${this.innerText}`;
            chosenDrink.append(newDrink);
            
            getPrice(elem);
            checkType(elem);
            
            order.classList.remove('youNeedToDoOrder');
            order.classList.add('orderDone');
            cherry.classList.remove('fullSize');
            
            additives.milk = 0;
            additives.cherry = 0; 
            
            
        } else if ((this.innerText == 'Вишневый сироп') && (startProcess == 1) && (additives.cherry == 0) && (cherry.classList.contains('fullSize') == false)) {
            
            const addCherry = document.createElement('p');
            addCherry.innerHTML = '+ добавить порцию вишневого сиропа';
            cherrySyrop.append(addCherry);
            additives.cherry = 1;

            price.innerHTML = '';
            menu.forEach(function(el){
                if (el.name == elem.innerText) {
                    const showPrice = document.createElement('p');
                    myPrice = myPrice + el.price;
                    showPrice.innerHTML = `${myPrice}`;
                    price.append(showPrice);

                    coffeeSize = coffeeSize + el.size;

                    console.log('объем напитка');
                    console.log(coffeeSize);
                    
                    if (
                        (((coffeeSize + 50) > large_cup.size)) || (((coffeeSize + 50) > medium_cup.size) && (large_cup.count == 0))
                    ) {
                        milk.classList.add('notSimple');
                        cherry.classList.remove('orderDone');
                        cherry.classList.add('fullSize');
                        order.classList.remove('orderDone');
                        order.classList.add('youNeedToDoOrder');
                    }
                }
            });
            
        } else if ((this.innerText == 'Вишневый сироп') && (additives.cherry == 1) && (cherry.classList.contains('fullSize') == false)) {
            
            cherrySyrop.innerHTML = '';
            const addCherry = document.createElement('p');
            addCherry.innerHTML = '+ добавить двойную порцию вишневого сиропа';
            cherrySyrop.append(addCherry);
            additives.cherry = 2;
            cherry.classList.remove('orderDone');

            price.innerHTML = '';
            menu.forEach(function(el){
                if (el.name == elem.innerText) {
                    const showPrice = document.createElement('p');
                    myPrice = myPrice + el.price;
                    showPrice.innerHTML = `${myPrice}`;
                    price.append(showPrice);

                    coffeeSize = coffeeSize + el.size;

                    console.log('объем напитка');
                    console.log(coffeeSize);
                    
                    if (
                        (((coffeeSize + 50) > large_cup.size)) || (((coffeeSize + 50) > medium_cup.size) && (large_cup.count == 0))
                    ) {
                        milk.classList.add('notSimple');
                        cherry.classList.remove('orderDone');
                        order.classList.remove('orderDone');
                        order.classList.add('youNeedToDoOrder');
                    }
                }
            });
        } 
    });
    
})



