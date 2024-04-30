/* function oobsh() {

    let inputValue = document.getElementById('input').value;
    
    let number = +(inputValue);

    let sum = 0;
    while (number) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }

    document.getElementById('result').textContent = `Sum: ${sum}`;
} */

/* let input1 = document.getElementById('input1').value;

let input2 = document.getElementById('input2').value;

function oobsh() {
    let number1 = +(input1);
    let number2 = +(input2);

    let sum = 0;
    while (number1) {
        sum += number1 % 10;
        number1 = Math.floor(number1 / 10);
    }
    while (number2) {
        sum += number2 % 10;
        number2 = Math.floor(number2 / 10);
    }
    document.getElementById('result').textContent = `Sum: ${sum}`;
}
 */
/* 

const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
function Content() {
    const temp = input1.value;
    input1.value = input2.value;
    input2.value = temp;
}
const exc = document.getElementById('exchange');
exc.addEventListener('click', Content); */

/* function unlockInputs() {
    document.getElementById('input1').disabled = false;

}
function lockinputs() {
    document.getElementById('input1').disabled = true;

}

const lock = document.getElementById('lockbutton');
lock.addEventListener('click', lockinputs);

const unlockbutton = document.getElementById('unlockbutton');
unlockbutton.addEventListener('click', unlockInputs); */

/* let name = document.getElementById('name')
function change(ele) {
    ele.style.backgroundColor = 'red'
}
 */