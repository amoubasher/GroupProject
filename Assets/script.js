var quiz = document.getElementById("quiz");
var charTotal = 0;
var currentQuestion = 0;

var questions = [
    {
        // Change answers -> Venom / Captain America / Deadpool / Black Widow
        // Move questions to another .js file -> cleans up script.js
        // 5Q! 4A =20 0-4 CAP 5-9 Deadpool 10-14 Black Widow 15-19 Venom
    title: "What is your greatest Strength?",
    answers: [
            { answer: 'Justice', correct: 0 },
            { answer: 'Everthing DUH!', correct: 1 },
            { answer: 'Shadows', correct: 2 },
            { answer: 'We are Venom!', correct: 3 }
        ]
    },
    {
    title: "Which is better?",
    answers: [
        { answer: 'Justice', correct: 0 },
        { answer: 'Everthing DUH!', correct: 1 },
        { answer: 'Shadows', correct: 2 },
        { answer: 'We are Venom!', correct: 3 }
        ]
    },
    {
    title: "best best best?",
        answers: [
            { answer: 'Justice', correct: 0 },
            { answer: 'Everthing DUH!', correct: 1 },
            { answer: 'Shadows', correct: 2 },
            { answer: 'We are Venom!', correct: 3 }
            ]
        }
]

// Fix styling with JQuery 
function questionPage(question) {

    quiz.innerHTML = /*html*/`
    <p>
    ${question.title}
    </p>
        <ul>
            <div class="btn-group-vertical">
                <li><button type="button" class="clickers btn btn-dark btn-lg mb-3" id="answerOne" data-correct="${question.answers[0].correct}">${question.answers[0].answer}</button>
                <li><button type="button" class="clickers btn btn-dark btn-lg mb-3" id="answerTwo" data-correct="${question.answers[1].correct}">${question.answers[1].answer}</button>
                <li><button type="button" class="clickers btn btn-dark btn-lg mb-3" id="answerThree" data-correct="${question.answers[2].correct}">${question.answers[2].answer}</button>
                <li><button type="button" class="clickers btn btn-dark btn-lg" id="answerFour" data-correct="${question.answers[3].correct}">${question.answers[3].answer}</button>
            </div>
        </ul>
    `
    // document
    // .getElementById("answerOne, answerTwo, answerThree")
    // .addEventListener(
    //     'click', 
    //     function () {
    //     currentQuestion++
    //     questionPage(questions[currentQuestion]);
    // })

    // Playing around with a different way to get if answer is correct
    //     var fort = function isCorrect(torf){
    //     return torf;

    // }

    document
    .querySelectorAll('.clickers')
    .forEach(item => (item.addEventListener(
        'click', 
        function() {
            var spitting = $(this).data('correct')
            console.log(spitting);
            charTotal= charTotal + spitting;
            currentQuestion++;
            if(spitting <= 2){
                questionPage(questions[currentQuestion])
            }
            if(spitting === 3){
                charResults()
            }
        }
    )
    )
    )
}

// Change character results page to fit styling 
// Change to also match the four different characters

function charResults() {
    var choosenChar;

    if (charResults <=4 ){
         choosenChar= capID;
    }
    if (charResults > 4 && charResults <= 9 ){
        choosenChar= deadID;

    }

    //LANDING PAGE DISPLAY RESULTS
    quiz.innerHTML = /*html*/ `
    <p>
        RESULTS
    </p>
    <body>
    <input type="text" id="myInput">
    <button type="button" class="btn btn-dark btn-lg" id="myBtn"> Show Value</button>

    </body>

    `
}

// Style the homepage w/JQuery, red / black theme -> Put logo in obvious spot (middle)
function homepage() {
    quiz.innerHTML = /*html*/ `
    <p>
    My Quiz
    </p>
    <button type="button" class="btn btn-dark btn-lg" id="startQuiz">Start Quiz</button>
    `

    document
    .getElementById("startQuiz")
    .addEventListener(
        'click', 
        function () {
        questionPage(questions[currentQuestion]);
    });
}

homepage();
