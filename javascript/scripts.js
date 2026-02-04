const answerOptions = document.querySelector(".answeroptions");

let quizCategory = "programming";

// Fetch a random question from based on the selected category
const getRandomQuestion = () => {
    const categoryQuestions = questions.find(cat => cat.category.toLowerCase() === quizCategory.toLowerCase()).questions || [];
    
    const randomQuestion = categoryQuestions[Math.floor(Math.random() * categoryQuestions.length)];
    return randomQuestion;
}

// Render the current question and its options in the quiz
const renderQuestion = () => {
    const currentQuestion = getRandomQuestion();
    if(!currentQuestion) return;

    // Update the UI
    answerOptions.innerHTML = "";
    document.querySelector(".question-text").textContent = currentQuestion.question;

    // Create option <li> elements and append them

    currentQuestion.options.forEach(option => {
        const li = document.createElement("li");
        li.classList.add("answer-option");
        li.textContent = option;
        answerOptions.appendChild(li);
    });
}

renderQuestion();
