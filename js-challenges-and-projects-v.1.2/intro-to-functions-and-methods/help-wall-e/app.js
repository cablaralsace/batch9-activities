const robot = document.querySelector('.robot')

//Challenge: Make Eve move when you click its body.

var motion=100;

function moveRobot() {
    //add code here
    motion+=20;
    robot.style.marginLeft= motion +'px';
    return motion;
}
robot.addEventListener('click', moveRobot)