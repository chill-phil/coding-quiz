var startQuizBtnEl = document.querySelector('#start-quiz');
var quizSection = document.querySelector('#quiz-section')
var quizQuestions = ['question1', 'question2', 'question3', 'question4', 'question5'];
var correctAnswer1 = document.getElementById('')



var timer = function () {
    var minute = 4;
    var second = 60

    setInterval(function() {
        if (minute == 0 && second == 1) {
            document.querySelector('#timer').innerHTML = '00:00';
        } else {
            second--;

            if(second == 0) {
                minute--;
                second = 60;

                if(minute == 0) {
                    minute = minute;
                }
            }
        }

        document.querySelector('#timer').innerHTML = minute + ':' + second;
    }, 1000);
} 




var toFinalScore = function() {
    alert('Final Score');
};




var toQ5 = function() {
    // remove start quiz section
    quizSection.innerHTML = '';

    // create 1st question
    var q5 = document.createElement('section');
    q5.className = 'quizQuestion';
    q5.textContent = 'Which method saves data to local storage?';          // update with 1st question as string

    // display 1st question 
    quizSection.appendChild(q5);


    // create 1st question answer choices
    var q5AnswerA = document.createElement('button');
        q5AnswerA.className = 'btn';
        q5AnswerA.setAttribute('id', 'wrong-answer')
        q5AnswerA.addEventListener('click', function() {
            alert('Wrong!');
        });

    var q5AnswerB = document.createElement('button');
        q5AnswerB.className = 'btn';
        q5AnswerB.setAttribute('id', 'wrongAnswer1')
        q5AnswerB.addEventListener('click', function() {
            alert('Wrong!');
        });

    var q5AnswerC = document.createElement('button');
        q5AnswerC.className = 'btn';
        q5AnswerC.setAttribute('id', 'wrong-answer')
        q5AnswerC.addEventListener('click', function() {
            alert('Wrong!');
        });

    var q5AnswerD = document.createElement('button');
        q5AnswerD.className = 'btn';
        q5AnswerD.setAttribute('id', 'correct-answer')
        q5AnswerD.addEventListener('click', function() {
            alert('Correct!');
            toFinalScore();
        });



    q5AnswerA.textContent = 'saveLocal()';
    q5AnswerB.textContent = 'getItem()';
    q5AnswerC.textContent = 'notThisOne()';
    q5AnswerD.textContent = 'setItem()';


    quizSection.appendChild(q5AnswerA);
    quizSection.appendChild(q5AnswerB);
    quizSection.appendChild(q5AnswerC);
    quizSection.appendChild(q5AnswerD);    
};


var toQ4 = function() {
    // remove last question
     quizSection.innerHTML = '';

     // create 2nd question
     var q4 = document.createElement('section');
     q4.className = 'quizQuestion'
     q4.textContent = 'If you want to querry select by id, you must include a(n):';          // update with 1st question as string
     
     // display question
     quizSection.appendChild(q4); 
     
     
     // create 1st question answer choices
     var q4AnswerA = document.createElement('button');
         q4AnswerA.className = 'btn';
         q4AnswerA.setAttribute('id', 'wrong-answer')
         q4AnswerA.addEventListener('click', function() {
             alert('Wrong!');
         });
 
     var q4AnswerB = document.createElement('button');
         q4AnswerB.className = 'btn';
         q4AnswerB.setAttribute('id', 'correct-answer')
         q4AnswerB.addEventListener('click', function() {
             alert('Correct!');
             toQ5();
         });
 
     var q4AnswerC = document.createElement('button');
         q4AnswerC.className = 'btn';
         q4AnswerC.setAttribute('id', 'wrong-answer')
         q4AnswerC.addEventListener('click', function() {
             alert('Wrong!');
         });
 
     var q4AnswerD = document.createElement('button');
         q4AnswerD.className = 'btn';
         q4AnswerD.setAttribute('id', 'wrong-answer')
         q4AnswerD.addEventListener('click', function() {
             alert('Wrong!');
         });
 
 
 
     q4AnswerA.textContent = '*';
     q4AnswerB.textContent = '#';
     q4AnswerC.textContent = '!';
     q4AnswerD.textContent = '&';
  
 
     quizSection.appendChild(q4AnswerA);
     quizSection.appendChild(q4AnswerB);
     quizSection.appendChild(q4AnswerC);
     quizSection.appendChild(q4AnswerD);

};



var toQ3 = function() {
     // remove last question
     quizSection.innerHTML = '';

     // create 2nd question
     var q3 = document.createElement('section');
     q3.className = 'quizQuestion'
     q3.textContent = '3. In web development, we refer to the observation of an event as a(n):';          // update with 1st question as string
     
     // display question
     quizSection.appendChild(q3); 
     
     
     // create answer choices
     var q3AnswerA = document.createElement('button');
         q3AnswerA.className = 'btn';
         q3AnswerA.setAttribute('id', 'wrongAnswer')
         q3AnswerA.addEventListener('click', function() {
             alert('Wrong!');
         });
 
     var q3AnswerB = document.createElement('button');
         q3AnswerB.className = 'btn';
         q3AnswerB.setAttribute('id', 'wrongAnswer')
         q3AnswerB.addEventListener('click', function() {
             alert('Wrong!');
         });
 
     var q3AnswerC = document.createElement('button');
         q3AnswerC.className = 'btn';
         q3AnswerC.setAttribute('id', 'wrongAnswer')
         q3AnswerC.addEventListener('click', function() {
             alert('Wrong!');
         });
 
     var q3AnswerD = document.createElement('button');
         q3AnswerD.className = 'btn';
         q3AnswerD.setAttribute('id', 'correctAnswer')
         q3AnswerD.addEventListener('click', function() {
             alert('Correct!');
             toQ4();
         });
 
 
 
     q3AnswerA.textContent = 'Event';
     q3AnswerB.textContent = 'hover';
     q3AnswerC.textContent = 'Event handler';
     q3AnswerD.textContent = 'Event listener';
  
 
     quizSection.appendChild(q3AnswerA);
     quizSection.appendChild(q3AnswerB);
     quizSection.appendChild(q3AnswerC);
     quizSection.appendChild(q3AnswerD);
 };




var toQ2 = function() {
    // remove last question
    quizSection.innerHTML = '';

    // create 2nd question
    var q2 = document.createElement('section');
    q2.className = 'quizQuestion'
    q2.textContent = '2. Which method creates DOM element objects?';          // update with 1st question as string
    
    // display question
    quizSection.appendChild(q2); 
    
    
    // create question answer choices
    var q2AnswerA = document.createElement('button');
        q2AnswerA.className = 'btn';
        q2AnswerA.setAttribute('id', 'correct-answer')
        q2AnswerA.addEventListener('click', function() {
            alert('Correct!');
            toQ3();
        });

    var q2AnswerB = document.createElement('button');
        q2AnswerB.className = 'btn';
        q2AnswerB.setAttribute('id', 'wrong-answer')
        q2AnswerB.addEventListener('click', function() {
            alert('Wrong!');
        });

    var q2AnswerC = document.createElement('button');
        q2AnswerC.className = 'btn';
        q2AnswerC.setAttribute('id', 'wrong-answer')
        q2AnswerC.addEventListener('click', function() {
            alert('Wrong!');
        });

    var q2AnswerD = document.createElement('button');
        q2AnswerD.className = 'btn';
        q2AnswerD.setAttribute('id', 'wrong-answer')
        q2AnswerD.addEventListener('click', function() {
            alert('Wrong!');
        });



    q2AnswerA.textContent = '.createElement()';
    q2AnswerB.textContent = '.querrySelector()';
    q2AnswerC.textContent = '.false()';
    q2AnswerD.textContent = 'var';
 

    quizSection.appendChild(q2AnswerA);
    quizSection.appendChild(q2AnswerB);
    quizSection.appendChild(q2AnswerC);
    quizSection.appendChild(q2AnswerD);
};
    





var startQuiz = function () {
    // alert that quiz has begun
    alert('The quiz has begun!');
    
    // remove start quiz section
    quizSection.innerHTML = '';

    // create 1st question
    var q1 = document.createElement('section');
    q1.className = 'quizQuestion';
    q1.textContent = '1. A function that has been passed into a function is called a(n):';          // update with 1st question as string
    
    // display 1st question 
    quizSection.appendChild(q1);


    // create 1st question answer choices
    var q1AnswerA = document.createElement('button');
        q1AnswerA.className = 'btn';
        q1AnswerA.setAttribute('id', 'correct-answer')
        q1AnswerA.addEventListener('click', function() {
            alert('Correct!');
            toQ2();
        });

    var q1AnswerB = document.createElement('button');
        q1AnswerB.className = 'btn';
        q1AnswerB.setAttribute('id', 'wrong-answer')
        q1AnswerB.addEventListener('click', function() {
            alert('Wrong!');
        });

    var q1AnswerC = document.createElement('button');
        q1AnswerC.className = 'btn';
        q1AnswerC.setAttribute('id', 'wrong-answer')
        q1AnswerC.addEventListener('click', function() {
            alert('Wrong!');
        });

    var q1AnswerD = document.createElement('button');
        q1AnswerD.className = 'btn';
        q1AnswerD.setAttribute('id', 'wrong-answer')
        q1AnswerD.addEventListener('click', function() {
            alert('Wrong!');
        });



    q1AnswerA.textContent = 'callback function';
    q1AnswerB.textContent = 'bio-hazard';
    q1AnswerC.textContent = 'variable';
    q1AnswerD.textContent = 'DOM';
 

    quizSection.appendChild(q1AnswerA);
    quizSection.appendChild(q1AnswerB);
    quizSection.appendChild(q1AnswerC);
    quizSection.appendChild(q1AnswerD);
};



startQuizBtnEl.addEventListener('click', startQuiz);
startQuizBtnEl.addEventListener('click', timer);
