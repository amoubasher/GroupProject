// Declare Variables that will be used for characters, questions, & innerHTML's
var quiz = document.getElementById("quiz");
var charTotal = 0;
var currentQuestion = 0;

var cap_ID= 1009220
var dp_ID=1009268
var bw_ID=1017109
var venom_ID=1009663

var charResults = {}


var questions = [
  {
    // Change answers -> Venom / Captain America / Deadpool / Black Widow 
    // Move questions to another .js file -> cleans up script.js 
    // 5Q! 4A =20 0-4 CAP 5-9 Deadpool 10-14 Black Widow 15-19 Venom 
    // Expand to five questions - Keith 
    title: "If you had one of these powers, which would it be?",
    answers: [
      { answer: "Strength and Morality", correct: 0 },
      { answer: "Everthing DUH!", correct: 1 },
      { answer: "Decades of training (without actually training)", correct: 2 },
      { answer: "Being part Alien", correct: 3 },
    ],
  },
  { 
    title: "You have beaten a villain, what will you do now?", 
    answers: [ 
        { answer: "Take them to jail.", correct: 0}, 
        { answer: "Slap them until they blackout and do it again", correct: 1}, 
        { answer: "Let them go, they can't hide from you", correct: 2}, 
        { answer: "Eat Them!", correct: 3}, 
    ],
  },
  {
    title: "What is your personality type?",
    answers: [
      { answer: "Patriotic", correct: 0 },
      { answer: "Jokester", correct: 1 },
      { answer: "Lone-Wolf", correct: 2 },
      { answer: "Bold", correct: 3 },
    ],
  },
  {
    title: "You know where a villain is hiding, what do you do?",
    answers: [
      { answer: "Rally everyone, then take them down", correct: 0 },
      { answer: "Knock on their door", correct: 1 },
      { answer: "They're already taken care of", correct: 2 },
      { answer: "Eat them before they can run", correct: 3 },
    ],
  },
  { 
    title: "The key to world peace is: ", 
    answers: [ 
        { answer: "Fighting for what's right", correct: 0}, 
        { answer: "Chimichangas and Bullets", correct: 1}, 
        { answer: "Fighting from the shadows", correct: 2}, 
        { answer: "Killing the bad guys", correct: 3}, 
    ],
  },
  { 
    title: "Someone hurt you a long time ago, you've just met them, what do you do?", 
    answers: [ 
        { answer: "Be the better person, leave them alone", correct: 0}, 
        { answer: "Scar them", correct: 1}, 
        { answer: "Threaten them, and remind them who you are now", correct: 2}, 
        { answer: "Beat them up", correct: 3}, 
    ],
  },
  { 
    title: "You've been caught for a crime, what do you do?", 
    answers: [ 
        { answer: "Turn myself in, it's only right", correct: 0}, 
        { answer: "Frame someone I hate", correct: 1}, 
        { answer: "I'm already gone from the scene", correct: 2}, 
        { answer: "Get away from there ASAP!", correct: 3}, 
    ],
  },
];

// Fix styling with JQuery
// List the buttons that will have answers
function questionPage(question) {
  quiz.innerHTML = /*html*/ `
    <p class="q-title">
        ${question.title}
    </p> 
        <ul>
            <div class="d-grid gap-2 d-md-block" id="navigation">
                <li><button type="button" class="clickers btn-lg mb-3" id="answerOne" data-correct="${question.answers[0].correct}">${question.answers[0].answer}</button>
                <li><button type="button" class="clickers btn-lg mb-3" id="answerTwo" data-correct="${question.answers[1].correct}">${question.answers[1].answer}</button>
                <li><button type="button" class="clickers btn-lg mb-3" id="answerThree" data-correct="${question.answers[2].correct}">${question.answers[2].answer}</button>
                <li><button type="button" class="clickers btn-lg mb-3" id="answerFour" data-correct="${question.answers[3].correct}">${question.answers[3].answer}</button>
            </div>
        </ul>
    `;

// Add logic for when the user clicks on an answer, and to tally up answers for the results

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
      if (currentQuestion <= 6) {
        questionPage(questions[currentQuestion]);
      }
      //no more questions left go to results
      if (currentQuestion === 7) {
        choosenChar(charTotal);

      }
    })
  );
}

// Start API call for character ID's and other data

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
  charResultsPage(charResults)
}
console.log(result)
})
//   .then(result => (charName = result.results))
 .catch(error => console.log('error', error));
 return charResults
}

// Change character results page to fit styling
// Change to also match the four different characters
// Make sure that the results from the questions are correctly added up together 
    // 5Q! 4A =20 0-4 CAP 5-9 Deadpool 10-14 Black Widow 15-19 Venom 

function choosenChar(t){
var choosenChar
// Make the answers / results more dynamic  
    if (t <= 4 ){
        choosenChar = cap_ID;
    }
    if (t > 4 && t <= 7){
        choosenChar = dp_ID;
    } 
    if (t > 7 && t <= 14) { 
        choosenChar = bw_ID;
    }
    if (t > 14 && t <=21 ) { 
        choosenChar = venom_ID
    }
    getCharData(choosenChar);

  }

    function charResultsPage(charResults){

    // API call to get chosen character
    // Syntax to use information from API

    console.log(charResults.name)

    if (charResults.description === "") {
      // document.getElementById("description").innerText = "Click the Button Below To Learn More About This Character!";
      charResults.description = "Click the Button Below To Learn More About This Character!";
    }


    //LANDING PAGE DISPLAY RESULTS
    // Make Cards dynamic so the official data is published, or if the API changes the character's data so that the card will always have up-to-date info
    quiz.innerHTML = /*html*/ `
    <p>
    You are ${charResults.name}
    </p>
    <body>
    <div class="card text-center" >
    
    <img class="card-img-top" src="${charResults.thumbnail.path}.${charResults.thumbnail.extension}" alt="Super Hero's Image">
    <div>
    <h4 class="card-title">${charResults.name}</h4>
    <p class="description card-text">${charResults.description}</p>
    <button type="button" class="btn-lg links"><a href="${charResults.urls[0].url}" target="_blank" class="btn-lg"> COMICS/LINKS </a></button>
    </div>
    
    </div>
    <button type="button" class="clickers btn-lg mb-3" id="reset">Reset Quiz</button>
    </body>
    
    `
    document.querySelectorAll(".clickers").forEach((item) =>
    item.addEventListener("click", function () {
      charTotal = 0;
      currentQuestion = 0;
      questionPage(questions[currentQuestion]);
    })
    )
}

// Style the homepage w/JQuery, red / black theme -> Put logo in obvious spot (middle)
// First page of Quiz
function homepage() {
  quiz.innerHTML = /*html*/ `
    <p class="mt-5 main-page">
    Which Marvel Hero Are You? Take This Quiz!
    </p>
    <button type="button" class="btn-lg" id="startQuiz">Start Quiz</button>
    `

  document.getElementById("startQuiz").addEventListener("click", function () {
    questionPage(questions[currentQuestion]);
  });
}

homepage();
