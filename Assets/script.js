var quiz = document.getElementById("quiz");
var totalCorrect = 0;
var totalWrong =0;
var AKA='killer'
var highScore=[]//array to build multi high score list
var currentQuestion = 0;
var bamTime = 30;
var questions = [
    {
    title: "Which is best?",
    answers: [
            { answer: 1, correct: false },
            { answer: 2, correct: false },
            { answer: 3, correct: true },
        ]
    },
    {
    title: "Which is better?",
    answers: [
            { answer: 4, correct: false },
            { answer: 5, correct: true },
            { answer: 6, correct: false },
        ]
    },
    {
    title: "Which is better?",
        answers: [
            { answer: 'js', correct: true },
            { answer: 'Python', correct: false },
            { answer: 'GoLang', correct: false },
            ]
        }
]

function curTime(){
    document.getElementById('counter').innerHTML= bamTime;
    bamTime--;
    if (bamTime<0){
        alert('You Lose');
        gameOver();
    }
    else{
        setTimeout(bamTime, 1000)
    }
}

function questionPage(question) {

    curTime()

    quiz.innerHTML = /*html*/`
    <p>
    ${question.title}
    </p>
    <ul>
    <li><button class="clickers" id="answerOne" data-correct="${question.answers[0].correct}">${question.answers[0].answer}</button>
    <li><button class="clickers" id="answerTwo" data-correct="${question.answers[1].correct}">${question.answers[1].answer}</button>
    <li><button class="clickers" id="answerThree" data-correct="${question.answers[2].correct}">${question.answers[2].answer}</button>
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



            if (spitting === true && bamTime !== 0){
                totalCorrect++;
                // used to check if working
                // console.log(totalCorrect)
                // console.log(spitting)
                currentQuestion++;
                if (currentQuestion == 3 || bamTime == 0)
                {
                    gameOver() 
                }
                else{
                    questionPage(questions[currentQuestion])
                }
            }
            if(spitting === false && bamTime !== 0){
                totalWrong++;
                questionPage(questions[currentQuestion])
                // used to check if working
                // console.log(spitting)
                // console.log(totalWrong)
            }
            // if (currentQuestion < 2){ 
            //     currentQuestion++;
            //     questionPage(questions[currentQuestion]);
            // }
        }
    )
    )
    )
}

function highScorePage() {
    // Creating a high score page to live outside of game/quiz where you can see the list before starting game/quiz
    quiz.innerHTML = /*html*/ `
    <p>
    High Scores
    </p>
    <ul id="myList">
    <li class="clickers" id="rank1">" ${AKA} Score: right ${totalCorrect} and wrong ${totalWrong}"</li>
    </ul>
    `

    //want to set to image for fun at some point
    document.getElementById("myList").style.listStyle = "square inside";
}

function gameOver() {
    quiz.innerHTML = /*html*/ `
    <p>
    Game Over
    </p>
    <body>
    <input type="text" id="myInput">
    <button type="button" id="myBtn"> Show Value</button>

    </body>

    `

$(document).ready(function(){
    // Get value on button click and show alert
    $("#myBtn").click(function(){
        var str = $("#myInput").val();
        localStorage.setItem('initals', str);
        alert("Cool Name Bro");
        AKA = str
        highScorePage()
    });

    //used for checking values
    //console.log(AKA)

})
}

function homepage() {
    quiz.innerHTML = /*html*/ `
    <p>
    My Quiz
    </p>
    <button id="startQuiz">Start Quiz</button>
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
