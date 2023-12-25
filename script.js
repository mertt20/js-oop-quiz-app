const ui = new UI();

function optionSelected(option){
    let answer = option.querySelector("span b").textContent;
    console.log(answer);
    
    let question = quiz.callQuestion();

    if (question.optionCheck(answer)){
        option.classList.add("correct");
        option.insertAdjacentHTML("beforeend",ui.correct_icon);
    }else{
        option.classList.add("incorrect");
        option.insertAdjacentHTML("beforeend",ui.incorrect_icon);

    }

    for (let i=0 ; i < ui.option_list.children.length; i++){
        ui.option_list.children[i].classList.add("disabled");

    }

    ui.btn_next.classList.add("display");
}

const quiz = new Quiz(questionList);

ui.btn_start.addEventListener('click',function(){
    ui.quiz_box.classList.add('display')
    
    ui.showQuestion(quiz.callQuestion());
    
});

ui.btn_next.addEventListener('click',function(){
    ui.btn_next.classList.remove('display');
    if (quiz.questionList.length-1 > quiz.questionIndex) {
        quiz.questionIndex += 1;
        ui.showQuestion(quiz.callQuestion());

    }
    else { 
        console.log("Quiz Bitti!");
        let endQuizText =  `<p class="quiz-question-text">Quiz Bitti!</p>`;

    }


});


