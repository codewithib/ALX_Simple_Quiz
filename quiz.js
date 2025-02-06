function checkAnswer(event) {
    event.preventDefault();
    const correctAnswer = "4";
    const selectedAnswer = document.querySelector('input[name="quiz"]:checked');
    const userAnswer = selectedAnswer.value;
    const feedback = document.getElementById("#feedback");

    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect, try again!";
    }
}

const btn = document.getElementById("submit-answer");
btn.addEventListener("click", checkAnswer);