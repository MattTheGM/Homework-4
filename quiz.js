var pos = 0;
var correct = 0;
const startingMinutes = .1; 
let time = startingMinutes * 60;
let timerEl = document.getElementById("timer")
var test, test_status, question, choice, choices, chA, chB, chC;

var questions = [
    {
        question: "What is the proper way to start and end a tag in HTML?",
        a: "Slash in first tag; none in second",
        b: "Slash in second tag; none in first",
        c: "Slash in first tag, slash in second tag",
        answer: "B"
      },
    {
        question: "What does CSS stand for?",
        a: "Columned Style Sheet",
        b: "Cascara Smile Street",
        c: "Cascading Style Sheet",
        answer: "C"
      },
    {
        question: "Is JavaScript the same as Java?",
        a: "No",
        b: "Yes",
        c: "Maybe",
        answer: "A"
      },
    {
        question: "What is/are valid unit of size(s) for elements in HTML?",
        a: "pixels",
        b: "element (em) and root element (rem)",
        c: "Both are valid",
        answer: "C"
      }
];

function get(x){
    return document.getElementById(x);
}

function renderQuestion(){
    test = get("test");
    if(pos >= questions.length){
      test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
      get("test_status").innerHTML = "Test completed";
      pos = 0;
      correct = 0;
      return false;
    }
    get("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
    
    question = questions[pos].question;
    chA = questions[pos].a;
    chB = questions[pos].b;
    chC = questions[pos].c;
    test.innerHTML = "<h3>"+question+"</h3>";
    test.innerHTML += "<label> <input type='radio' name='choices' value='A'> "+chA+"</label><br>";
    test.innerHTML += "<label> <input type='radio' name='choices' value='B'> "+chB+"</label><br>";
    test.innerHTML += "<label> <input type='radio' name='choices' value='C'> "+chC+"</label><br><br>";
    test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}

function checkAnswer(){
    choices = document.getElementsByName("choices");
    for(var i=0; i<choices.length; i++){
      if(choices[i].checked){
        choice = choices[i].value;
      }
    }
    if(choice == questions[pos].answer){
      correct++;
    }
    pos++;
    renderQuestion();
}

window.addEventListener("load", renderQuestion);