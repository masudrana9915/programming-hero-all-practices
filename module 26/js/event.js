const blueButton = document.getElementById('make-blue');
blueButton.addEventListener('click', makeBlue);

function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}

const purpleButton = document.getElementById('make-purple');
purpleButton.addEventListener('click',makePurple);
function makePurple(){
 document.body.style.backgroundColor = 'purple';
}

const redButton = document.getElementById('make-red');
redButton.addEventListener('click',makeRed);
function makeRed(){
 document.body.style.backgroundColor = 'red';
}
document.getElementById('make-yellow').addEventListener('click', function(){
    document.body.style.backgroundColor = 'yellow';
  })