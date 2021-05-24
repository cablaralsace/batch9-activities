const squares = Array.from(document.querySelectorAll('.grid div'))
//Nodelist of all the div squares on our board. Think of it as an array. 

//Your goal is to add a chessboard color pattern to this blank board using loops and Arrays.
//write code here


/* WORKAROUND INDEXOF CALLING THE INDEX OF THE DIV INSTEAD OF THE ACTUAL DIV

for(var i=0; i<squares.length; i++) {
    if (squares.indexOf(squares[i])%2 === 0) { 
        squares[i].classList.add('even');
    }
    else {
        squares[i].classList.add('odd');
    }
}*/


/* WORKAROUND FOR NON-CSS CALLING

for (let i=0; i < squares.length; i++) {
    if (i%2 === 0) { 
        squares[i].style.background='#b88645';
    }
    else {
        squares[i].style.background='#e0c9ab';
    }
}*/


/* WORKAROUND GOD-TIER
for (i=0; i<squares.length; i++) {
    squares[i].classList.add(i % 2 == 0 ? 'even':'odd')
}*/


/* WORKAROUND CSS-CALLING */
for (i = 0; i<squares.length; i++) {
    if(i % 2 == 0) {
        squares[i].classList.add('even');
    } else {
        squares[i].classList.add('odd');
    }
}

