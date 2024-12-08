const handleClick = () => {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    console.log(randomNum);
    let userInput = prompt("Enter a number between 1 and 3");
    alert(`You guessed ${userInput}. The correct number was ${randomNum}`);
}

export default handleClick;