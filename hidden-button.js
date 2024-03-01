let buttons = ['button1', 'button2', 'button3'];
let winnerIndex = Math.floor(Math.random() * buttons.length);
let winnerButton = buttons[winnerIndex]

function isWinner(buttonId){
    document.getElementById(buttonId).style.color;
    if (buttonId === winnerButton) {
        alert("Congrats🎉! You won!")
    } else {
        alert("Sorry! More luck next time 👍!")
    }
}

function refresh() {
    window.location.reload("Try again!")
}
