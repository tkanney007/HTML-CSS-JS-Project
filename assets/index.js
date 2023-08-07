let responses = [
  "As I see it, yes.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don’t count on it.",
  "It is certain.",
  "It is decidedly so.",
  "Most likely.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Outlook good.",
  "Reply hazy, try again.",
  "Signs point to yes.",
  "Very doubtful.",
  "Without a doubt.",
  "Yes.",
  "Yes – definitely.",
  "You may rely on it.",
];

let shakeBtn = document.querySelector("#shakebutton");

let ballImg = document.querySelector("#ball");

let questionInput = document.querySelector("#question");

let responseDisplay = document.querySelector("#response");

let question = "";

let questResponse = "";

shakeBtn.addEventListener("click", shakeBall);

function getResponse() {
  questResponse = responses[Math.floor(Math.random() * responses.length)];
  console.log(questResponse);
}

function shakeBall() {
  question = questionInput.value;

  if (question == "") {
    alert("Please provide a question");
    return;
  } else if (question != "" && shakeBtn.innerHTML == "Ask Another Question") {
    location.reload();
    return;
  }
  questionInput.disabled = true;
  getResponse();

  ballImg.classList.toggle("shake");
  setTimeout(transitionToResponse, 1000);
}

function transitionToResponse() {
  ballImg.classList.toggle("fadeout");
  responseDisplay.innerHTML = questResponse;
  responseDisplay.classList.toggle("fadein");
  shakeBtn.innerHTML = "Ask Another Question";
}
