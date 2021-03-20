var startQuizBtnEl = document.querySelector('#start-quiz');
var quizSection = document.querySelector('#quiz-section')
var quizQuestions = ['question1', 'question2', 'question3', 'question4', 'question5'];
var correctAnswer1 = document.getElementById('')



var toQ5 = function() {
    alert('toQ2');
};


var toQ4 = function() {
    alert('toQ2');
};



var toQ3 = function() {
    alert('toQ3');
};










var toQ2 = function() {
    alert('toQ2');
    
    // remove last question
    quizSection.innerHTML = '';

    // create 2nd question
    var next= document.createElement('button');
    next.textContent = 'next';
    quizSection.appendChild(next); 
    next.addEventListener('click', toQ3);

    /* Left off here, want to contiue dynamically adding buttons that
    get me through to the end of 5 multiple choice questions.
    I know there is a way to compress this functionality with for/while loops
    and arrays, but I am just not there yet. Still grasping how to set and
    call variables for page mechanics */
};



var startQuiz = function () {
    // alert that quiz has begun
    alert('The quiz has begun!');
    
    // remove start quiz section
    quizSection.innerHTML = '';

    // create 1st question
    var q1 = document.createElement('section');
    q1.className = 'quiz-section';
    q1.textContent = quizQuestions[0]; 
    
    // display 1st question in place of star screen
    quizSection.appendChild(q1);


    // create 1st question answer choices
    var q1AnswerA = document.createElement('button');
        q1AnswerA.setAttribute('id', 'correctAnswer1')
        q1AnswerA.addEventListener('click', function() {
            alert('correct!');
            toQ2();
        });

    var q1AnswerB = document.createElement('button');
        q1AnswerB.setAttribute('id', 'wrongAnswer1')
        q1AnswerB.addEventListener('click', function() {
            alert('Wrong!');
        });

    var q1AnswerC = document.createElement('button');
        q1AnswerC.setAttribute('id', 'wrongAnswer1')
        q1AnswerC.addEventListener('click', function() {
            alert('Wrong!');
        });

    var q1AnswerD = document.createElement('button');
        q1AnswerD.setAttribute('id', 'wrongAnswer1')
        q1AnswerD.addEventListener('click', function() {
            alert('Wrong!');
        });



    q1AnswerA.textContent = 'answer A';
    q1AnswerB.textContent = 'answer B';
    q1AnswerC.textContent = 'answer C';
    q1AnswerD.textContent = 'answer D';
 

    quizSection.appendChild(q1AnswerA);
    quizSection.appendChild(q1AnswerB);
    quizSection.appendChild(q1AnswerC);
    quizSection.appendChild(q1AnswerD);
};



startQuizBtnEl.addEventListener('click', startQuiz);