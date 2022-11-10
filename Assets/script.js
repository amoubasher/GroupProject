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
            <div class="d-grid gap-2 d-md-block">
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

    //LANDING PAGE DISPLAY RESULTS
    quiz.innerHTML = /*html*/ `
    <p>
        RESULTS
    </p>
    <body>
        <div class="card" style="width:400px">
            <div class="supercard" id="blackwidow">
                <img class="card-img-top cartoon" src="./Assets/Images/blackwidow.jpg" alt="Black Widow">
                <h4 class="card-title">Black Widow</h4>
                <p class="card-text"> MORE INFO </p>
                <a href="https://www.marvel.com/comics/characters/1009189/black_widow?utm_campaign=apiRef&utm_source=908be84bdd5d62e47e3efabe9d44b7f5" target="_blank" class="btn btn-dark btn-lg"> COMICS/LINKS </a>
            </div>
            <div class="supercard" id="venom">
                <img class="card-img-top cartoon"" src="./Assets/Images/venom.jpg" alt="Venom">
                <h4 class="card-title">Venom</h4>
                <p class="card-text"> MORE INFO </p>
                <a href="#" class="btn btn-dark btn-lg"> COMICS/LINKS </a>
            </div>
            <div class="supercard" id="deadpool">
                <img class="card-img-top cartoon" src="./Assets/Images/Deadpool.png" alt="Deadpool">
                <h4 class="card-title">Deadpool</h4>
                <p class="card-text"> MORE INFO </p>
                <a href="#" class="btn btn-dark btn-lg"> COMICS/LINKS </a>
            </div>
            <div class="supercard" id="captain">
                <img class="card-img-top cartoon" src="./Assets/Images/captainAmerica.jpg" alt="Captain America">
                <h4 class="card-title">Captain America</h4>
                <p class="card-text"> MORE INFO </p>
                <a href="#" class="btn btn-dark btn-lg"> COMICS/LINKS </a>
            </div>
        </div>
    </body>

    `
        // <input type="text" id="myInput">
        // <button type="button" class="btn btn-dark btn-lg" id="myBtn"> Show Value</button>
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
