
function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';

    if (pinString.length == 4) {
        return pin;
    }
    else {
        console.log("got digit lower than 4 digit call again : ", pin);
        return getPin();
    }
}

//Function to generate a Pin
function generatePin() {
    const pin = getPin();
    // console.log('we got 4 digit num : ',pin);
    document.getElementById('display-pin').value = pin;
}

//Calculator 
document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
   
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {   
        if(number =='C'){
            calcInput.value='';        
        }
    }

    else {   
        const previousNumber = calcInput.value
        const newCalc = previousNumber + number;
        calcInput.value = newCalc;
    }
});

//Function to verify generated Pin 
function verifyPin(){
    const pin=document.getElementById('display-pin').value;
    // console.log('Type of the pin num : ',typeof(pin));
    const typedNumbers=document.getElementById('typed-numbers').value;
    // console.log(typedNumbers);
    const successMessage=document.getElementById('notify-success');
    const failError=document.getElementById('notify-fail');
    if(pin == typedNumbers){
        
        successMessage.style.display='block';
        failError.style.display='none';
    }
    else{
        
        failError.style.display='block';
        successMessage.style.display='none';
    }
}