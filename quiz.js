const checkAnswer = (event) => {
    event.preventDefault();
    const correctAnswer = "4";
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    const userAnswer = selectedOption.value;
    
    const feedback = document.getElementById("feedback");

    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

const submitBtn = document.getElementById("submit-answer");

submitBtn.addEventListener("click", checkAnswer);