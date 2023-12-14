
let digit = document.getElementById("display");

function DisplayNumber(number) {

    digit.value += number; 
}


function clearDisplay() {
digit.value = '';
}

function Delete() {
    console.log("heood");
   digit.value=digit.value.toString().slice(0,-1);
  }
function Result() {
    const displayValue = document.getElementById('display').value;
    try {
        const result = eval(displayValue);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
