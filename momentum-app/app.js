// DATE AND TIME
const clock = document.querySelector('#clock');
const clockTime = clock.querySelector('h1');
const clockDate = clock.querySelector('h2');

function updateClock() {
    //Time
    const dt = new Date();
    const h = dt.getHours();
    const m = dt.getMinutes();
    const s = dt.getSeconds();

    clockTime.innerText = `${h < 10 ?  `0${h}` : h}:${m < 10 ?  `0${m}` : m}:${s < 10 ?  `0${s}` : s}`;  
    
    //Date
    const datestr = dt.toDateString();

    clockDate.innerText = `${datestr}`;

}


function initClock() {
    updateClock();
    setInterval (initClock, 1000);
}

initClock();



// NAME
let nameBtnJS = document.getElementById('nameBtn');
let nameInputField = document.getElementById('nameInput');
let nameGreeting = document.getElementById('nameGreet');

nameBtnJS.onclick =
function greetingName() {
    
    let nameInputJS = document.getElementById('nameInput').value;
    let nameDispJS = document.getElementById('nameGreet2');

    if(nameInputJS ==''){
        alert('Please type in your name.');
    }

    else{
    // Time-based Greeting
    var time = new Date().getHours();
    if (time < 12) {
        greeting = "☀️ Good Morning";
        endemoji = "☀️";
    } else if (time > 12  && time < 18) {
        greeting = "☕ Good Afternoon";
        endemoji = "☕";
    } else {
        greeting = "🌙 Good Evening";
        endemoji = "🌙";
    }

    nameDispJS.innerText = `${greeting}, ${nameInputJS}! ${endemoji}`;

    //Hide/Show Stuff
    nameBtnJS.classList.toggle('hide');
    nameInputField.classList.toggle('hide');
    nameGreeting.classList.toggle('hide');
    nameDispJS.classList.toggle('show');
    }
}




//FOCUS
let focusHeader1JS = document.getElementById('focusHeader1');
let focusHeader2JS = document.getElementById('focusHeader2');
let focusDispMainJS = document.getElementById('focusDisplayMain');


let focusInputField = document.getElementById('focusInput');
let focusBtnJS = document.getElementById('focusBtn');

focusBtnJS.onclick =
function focusMain() {
    
    let focusInputJS = document.getElementById('focusInput').value;

    if(focusInputJS ==''){
        alert('Please add your main focus.');
    }

    else {
    focusHeader2JS.innerText = `Here's your main focus for today:`;
    focusDispMainJS.innerText = `${focusInputJS}`;

    //Hide/Show Stuff
    focusHeader1JS.classList.toggle('hide');
    focusInputField.classList.toggle('hide');
    focusBtnJS.classList.toggle('hide');

    focusHeader2JS.classList.toggle('show');
    focusDispMainJS.classList.toggle('show');
    }
}

// QUOTE BANK
const quotes = [
    { id: 0, quote: "You're braver than you believe."},
    { id: 1, quote: "Success is not final. Failure is not fatal."}
];

const quoteDisplayJS = document.querySelector('#quoteDisplay');
const quoteBtnNextJS = document.querySelector('#quoteBtnNext');
const quoteBtnAddJS = document.querySelector('#quoteBtnAdd');
const quoteInputField = document.querySelector('#quoteInput');

quoteBtnNextJS.onclick =
function nextQuote() {
    let random = Math.floor(Math.random() * quotes.length);
    let randomQuote = quotes[random].quote;

    quoteDisplayJS.innerText = `"${randomQuote}"`;
}

quoteBtnAddJS.onclick =
function addQuote () {
    let quote = document.getElementById('quoteInput').value;

    if(quote ==''){
        alert('Please write a quote.');
    }

    quotes.push({
        id: quotes.length, quote
    });

    quoteInputField.value = '';
}



//TODO
const toDoInputJS = document.querySelector("#toDoInput");
const toDoBtnJS = document.querySelector("#toDoBtn");
const toDoListJS = document.querySelector('#toDoList');
const toDoItemsJS = document.querySelector("#toDoItems");
let listJS = document.getElementsByTagName('li');

//add items to list
toDoBtnJS.onclick =
function toDoListItems() {
    let txt = toDoInputJS.value;
    if(txt ==''){
        alert('Please write a to-do.');
    }
    else{
        li = document.createElement('li');
        li.innerText = `${txt}`;
        toDoItemsJS.insertBefore(li,toDoItemsJS.childNodes[0]);
        toDoInputJS.value = '';
    }
    
};

//remove done items
toDoItemsJS.ondblclick = function(ev){
    if(ev.target.tagName == 'LI'){
         ev.target.classList.toggle('none');
    }
};

toDoItemsJS.onclick = function(ev){
    if(ev.target.tagName == 'LI'){
         ev.target.classList.toggle('checked');

    }
};



//BackgroundButton
let backgroundBtnJS = document.getElementById('backgroundBtn');

const bgArray = [
    'url(assets/images/bg1.jpg)',
    'url(assets/images/bg2.jpg)',
    'url(assets/images/bg3.jpg)',
    'url(assets/images/bg4.jpg)',
];

backgroundBtnJS.onclick =
function darkTheme () {
    let randomBackground = Math.floor(Math.random() * bgArray.length);
    let randomBG = bgArray[randomBackground];

    document.body.style.backgroundImage = `${randomBG}`;
}