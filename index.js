var readlineSync = require('readline-sync');
var score = 0;
var userName = readlineSync.question("Enter your name:")
console.log("welcome " + userName + " lets begin with marvel quiz !");

function play(question,answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer == answer) {
    console.log("you are right!!");
    score = score + 1;
  } else {
    console.log("you are wrong ");
    score = score - 1;
  }
  console.log("your score is:"+score);
  console.log("_______________________________");
}

var list = [{ question: "who is the strongest avneger?", answer: "hulk" },{ question: "who is the first avenger?", answer: "captain america" },{question:"who is the smartest avenger?",answer:"iron man"},{question:"tell me the name of thor's father name?",answer:"odin"},{question:"what stone did vision has?",answer:"mind stone"},{question:" Who is Tony Stark’s father?",answer:"howard stark"},{question:" Wanda and her brother Pietro are from where?",naswer:"sokovia"},{question:" Who rescued Tony Stark and Nebula from space?",answer:"captain marvel"},{question:" Who is the Winter Soldier?",answer:"bucky"},{question:"Whose nickname is Murder Bot?",answer:"ultron"}];

for (i = 0; i<list.length; i++){
  var currentquestion = list[i];
play(currentquestion.question, currentquestion.answer)
}
console.log("your total score is :" +score);

