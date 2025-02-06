function checkAnswer(event) {
    event.preventDefault();
    const correctAnswer = "4";
    const selectedAnswer = document.querySelector('input[name="quiz"]:checked');
    const userAnswer = selectedAnswer.value;
    const feedbackElement = document.querySelector("p#feedback");

    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct, Well done!";
    } else {
        feedbackElement.textContent = "That's incorrect, try again!";
    }
}

const btn = document.getElementById("submit-answer");
btn.addEventListener("click", checkAnswer);