function changeText(){
    let potentialTexts= ['Cricket','Football','Hockey','Tennis','Basketball'];
    let randomNumber= getRandomNumber(0,potentialTexts.length-1);
    let textToChangeto= potentialTexts[randomNumber];
    document.getElementById('header').innerHTML= textToChangeto;
}

function getRandomNumber(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}