let step = document.querySelector(".dynamic-number");
let message = document.getElementById("number-game-result");
let cnt = 0;
let original_number = parseInt(Math.random() * 100)
console.log(correct_number)
console.log(step.innerHTML)
function clickHandler(){
    cnt++;
    step.innerHTML = cnt;
    let number_user = document.getElementById("num").Value;
    console.log(number_user);

    if (number_user < original_number) {
        message.innerHTML="Try entering greater number.";
    }else if (number_user > original_number) {
        message.innerHTML = "Try entering smaller number";
    }else{
        message.innerHTML = "Correct guess. you win.."
    }
}