const quizData = [
    {
    question: "1. What is your name?",
    options: ["Gauri", "Dhriti", "Aman", "janhvi", "kush"],
        answer: 1
    },
    {
        question: "2. what is your course?",
        options: [
            "Btech",
            "BCA",
            "BTECH hons",
            "BBA",
            "FRee"
        ],
        answer: 1
    },
    {
        question: "3. which skills do your have?",
        options: ["java", "dsa", "jss", "pyhton", "ALL"],
        answer: 5
    },
    {
        question: "4.where do you live?",
        options: ["up", "uk", "out of india", "not sure", "none of ythe above"],
        answer: 1
    },
    {
        question: "5. What do you like?",
        options: ["coffee", "juice", "cocktail", "coldrink", "none"],
        answer: 2
    }
];

var quizData = [
    { question: "1. What is your name?", options: ["Gauri", "Dhriti", "Aman", "janhvi", "kush"], answer: 1 },
    { question: "2. what is your course?", options: ["Btech","BCA","BTECH hons","BBA","FRee"], answer: 0 }
];

var index = 0;
var score = 0;

var questionEl = document.getElementById("question");
var optionsEl = document.getElementById("options");
var nextBtn = document.getElementById("nextBtn");

function loadQuestion() {
    var q = quizData[index];
    questionEl.innerHTML = q.question;
    optionsEl.innerHTML = "";

    for (var i = 0; i < q.options.length; i++) {
        var div = document.createElement("div");
        div.innerHTML = q.options[i];
        div.onclick = function() { checkAnswer(this); }
        optionsEl.appendChild(div);
    }
}

function checkAnswer(selected) {
    if (selected.innerHTML == quizData[index].options[quizData[index].answer]) {
        score++;
    }
    index++;
    if (index < quizData.length) {
        loadQuestion();
    } else {
        document.getElementById("container").innerHTML =
            "<h2>Score: " + score + " / " + quizData.length + "</h2>" +
            "<button onclick='location.reload()'>Play Again</button>";
    }
}

loadQuestion();
