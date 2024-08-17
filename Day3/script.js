const questions = [
    {
        question: "which is the largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Giraffe", correct: false },
            { text: "Elephant", correct: false }

        ]
    },
    {
        question: "which is the smallest country in the world?",
        answers: [
            { text: "Vantican City", correct: true },
            { text: "Bhutan", correct: false },
            { text: "Nepal", correct: false },
            { text: "Sri Lanka", correct: false }

        ]
    },
    {
        question: "which is the largest desert in the world?",
        answers: [
            { text: "Kolahari", correct: false },
            { text: "Gobi", correct: false },
            { text: "Sahara", correct: false },
            { text: "Antartica", correct: true }

        ]
    },
    {
        question: "which is the smallest continent in the world?",
        answers: [
            { text: "Asia", correct: false },
            { text: "Australia", correct: true },
            { text: "Arctic", correct: false },
            { text: "Africa", correct: false }

        ]
    },
]

const questionEelement = document.querySelector(".question");
const answerBtn = document.querySelector(".answer");
const nextButton = document.querySelector(".next-btn");

let currentIndex = 0;
let score = 0;
function startQuiz() {
    currentIndex = 0;
    score = 0;
    nextButton.innerText = "NEXT";
    showQuestions();
}


function resetState() {
    nextButton.style.display = 'none';
    while (answerBtn.firstChild) {
        answerBtn.removeChild(answerBtn.firstChild);
    }
}
function showQuestions() {
    // handle quesiton
    resetState();
    let currentQuestion = questions[currentIndex];
    let questionNo = currentIndex + 1;
    questionEelement.innerText = questionNo + " " + currentQuestion.question;

    // handle answer Button
    currentQuestion.answers.forEach((answer) => {
        const ans = document.createElement("button");
        ans.innerText = answer.text;
        ans.classList.add("btn");
        answerBtn.appendChild(ans)
        if (answer.correct) {
            ans.dataset.correct = answer.correct;
        }
        ans.addEventListener("click", selectAnswer);
    })
}

function showScore() {
    resetState();
    questionEelement.innerText = `your score ${score} out of ${questions.length}`;
    nextButton.innerText = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentIndex++;
    if (currentIndex < questions.length)
        showQuestions()
    else {
        showScore();
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    
   
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
       
    }
    Array.from(answerBtn.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    if (currentIndex < questions.length)
        handleNextButton();
    else {
        startQuiz();
    }
});
startQuiz();