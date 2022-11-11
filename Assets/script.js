var quiz = document.getElementById("quiz");
var charTotal = 0;
var currentQuestion = 0;

var cap_ID= 1009220
var Dp_ID=1009268
var BW_ID=1017109
var Venom_ID=1009663

var charResults={}


var questions = [
  {
    // Change answers -> Venom / Captain America / Deadpool / Black Widow
    // Move questions to another .js file -> cleans up script.js
    // 5Q! 4A =20 0-4 CAP 5-9 Deadpool 10-14 Black Widow 15-19 Venom
    title: "What is your greatest Strength?",
    answers: [
      { answer: "Justice", correct: 0 },
      { answer: "Everthing DUH!", correct: 1 },
      { answer: "Shadows", correct: 2 },
      { answer: "We are Venom!", correct: 3 },
    ],
  },
  {
    title: "Which is better?",
    answers: [
      { answer: "Justice", correct: 0 },
      { answer: "Everthing DUH!", correct: 1 },
      { answer: "Shadows", correct: 2 },
      { answer: "We are Venom!", correct: 3 },
    ],
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
  quiz.innerHTML = /*html*/ `
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
    `;
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

  document.querySelectorAll(".clickers").forEach((item) =>
    item.addEventListener("click", function () {
      var spitting = $(this).data("correct");
      //checking chose value # of answer
      console.log(spitting);
      //keeping tabs on chosen asnwer and adding it to total
      charTotal = charTotal + spitting;
      currentQuestion++;
      //checking total
      console.log(charTotal);
      //check to make sure there are questions left
      if (currentQuestion <= 2) {
        questionPage(questions[currentQuestion]);
      }
      //no more questions left go to results
      if (currentQuestion === 3) {
        choosenChar(charTotal);
      }
    })
  );
}

function ts(){
   return Math.floor(Date.now() / 1000)
}

function getCharData(QcharID){
  var Qts = ts();

  return fetch("https://gateway.marvel.com:443/v1/public/characters/" + QcharID + "?apikey=908be84bdd5d62e47e3efabe9d44b7f5" + "&ts=" + Qts)
.then(response => response.json())
.then(result => {
console.log(result.data.results[0]);
var charResults = result.data.results[0];
if (charResults != {}){
  charResultPage(charResults)
}
console.log(result)
})
//   .then(result => (charName = result.results))
 .catch(error => console.log('error', error));
 return charResults
}

// Change character results page to fit styling
// Change to also match the four different characters

function choosenChar(charTotal){
  var choosenChar;

  if (charTotal <=4 ){
    choosenChar = cap_ID;
}
if (charTotal > 4 && charTotal <= 9 ){
    choosenChar = Dp_ID;}

  charResults = getCharData(choosenChar)  
}

function charResultPage(charResults) {
    
    console.log(charResults)

    // API call to get chosen character
    // Syntax to use information from API

    // charResults[0].name
    // charResults[0].thumbnail.path
    // charResults[0].comics.available
    // charResults[0].series.available
    // charResults[0].stories.available
    // charResults[0].events.available

    // used for testing varables
    // var path = "http://i.annihil.us/u/prod/marvel/i/mg/e/03/5317713c9e746"
    // var ext = "jpg"

    //removed for testing                 <a href="${charResults.thumbnail.path}.${charResults.thumbnail.extension}" target="_blank" class="btn btn-dark btn-lg"> COMICS/LINKS </a>



    console.log(charResults.name)
    //LANDING PAGE DISPLAY RESULTS
    quiz.innerHTML = /*html*/ `
    <p>
        RESULTS
    </p>
    <body>
        <div class="card" style="width:400px">
            <img class="card-img-top" src="./Assets/Images/blackwidow.jpg" alt="Black Widow">
            <div>
                <h4 class="card-title">Black Widow</h4>
                <p class="card-text"> MORE INFO </p>
                <a href="#" class="btn btn-dark btn-lg"> COMICS/LINKS </a>
            </div>
            <div class="supercard" id="venom">
                <img class="card-img-top cartoon" src="./Assets/Images/venom.jpg" alt="Venom">
        <div class="card" style="width:400px">
            <div class="supercard" id="blackwidow">
                <img class="card-img-top cartoon" src="./Assets/Images/blackwidow.jpg" alt="Black Widow">
                <h4 class="card-title">${charResults.name}</h4>
                <p class="card-text"> MORE INFO </p>
            </div>
            <img class="card-img-top" src="./Assets/Images/venom.jpg" alt="Venom">
            <div>
            <div class="supercard" id="venom">
                <img class="card-img-top cartoon"" src="./Assets/Images/venom.jpg" alt="Venom">
            <img class="card-img-top" src="./Assets/Images/captainAmerica.jpg" alt="Captain America">
            <div>
                <h4 class="card-title">Captain America</h4>
                <p class="card-text"> MORE INFO </p>
                <a href="#" class="btn btn-dark btn-lg"> COMICS/LINKS </a>
            </div>
        </div>
    <input type="text" id="myInput">
    <button type="button" class="btn btn-dark btn-lg" id="myBtn"> Show Value</button>
            <img class="card-img-top" src="./Assets/Images/captainAmerica.jpg" alt="Captain America">
            <div>
            <div class="supercard" id="captain">
                <img class="card-img-top cartoon" src="./Assets/Images/captainAmerica.jpg" alt="Captain America">
            <img class="card-img-top" src="./Assets/Images/captainAmerica.jpg" alt="Captain America">
            <div>
            <div class="supercard" id="captain">
                <img class="card-img-top cartoon" src="./Assets/Images/captainAmerica.jpg" alt="Captain America">
                <h4 class="card-title">Captain America</h4>
                <p class="card-text"> MORE INFO </p>
                <a href="#" class="btn btn-dark btn-lg"> COMICS/LINKS </a>
            </div>
        </div>
    <input type="text" id="myInput">
    <button type="button" class="btn btn-dark btn-lg" id="myBtn"> Show Value</button>
        </div>
    </body>

    `
    console.log(charResults)
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

  document.getElementById("startQuiz").addEventListener("click", function () {
    questionPage(questions[currentQuestion]);
  });
}

homepage();
