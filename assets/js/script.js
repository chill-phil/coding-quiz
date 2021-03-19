var startQuizBtnEl = document.getElementById('start-quiz');
var mainEl = document.getElementById('main')
var quizQuestions = ['question1', 'question2', 'question3'];


var startQuiz = function () {
    // alert that quiz has begun
    alert('The quiz has begun!');
    
    // remove start quiz section
    mainEl.innerHTML = '';

    // add 1st question
    var quizQuestion1 = document.createElement('section');
    quizQuestion1.className = 'quiz-section';
    quizQuestion1.textContent = quizQuestions[0]; 
    
    // display 1st question in place of star screen
    document.body.appendChild(quizQuestion1);
};



startQuizBtnEl.addEventListener("click", startQuiz);