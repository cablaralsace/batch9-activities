const downButton = document.querySelector('#down')
const upButton = document.querySelector('#up')
const buyListDisplay = document.querySelector('#first-list')
const fridgeListDisplay = document.querySelector('#second-list')

const buyList = [' chicharon ', ' buko pie ', ' mango ', ' bacon ']
const fridge = [' cheese ', ' cold brew ', ' milk ', ' hotdog ', ' tocino ']
//Challenge: Please fill the fridge array with 5 items of your choice. 


//Challenge 2: You have bought some chicharon.
//Please remove it from the buyList and add it to the items in fridge.

fridge.push(buyList.shift());


//Challenge 3: Write a function that will remove an item from the fridge,
//and put it in the buyList, on the press of the moveUp button.

function moveUp(){
    if (fridge.length>0) {
    buyList.push(fridge.pop());
    display();
    }

    else {
        alert ('Your fridge is empty.')
    }
}

upButton.addEventListener('click', moveUp)

//Challenge 4: Write a function that will remove the last item in the buyList, 
//and put it in the fridge.

function moveDown(){
    if (buyList.length>0) {
    fridge.push(buyList.pop());    
    display();
    }

    else {
        alert ('Your buy list is empty.')
    }
}

downButton.addEventListener('click', moveDown)

function display() {
    buyListDisplay.innerHTML = buyList;
    fridgeListDisplay.innerHTML = fridge;
}
display();
