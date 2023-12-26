const ui = new UI();

function optionSelected(option){
    let answer = option.querySelector("span b").textContent;
    let question = quiz.callQuestion();
    
    if (question.optionCheck(answer)){
        option.classList.add("correct");
        option.insertAdjacentHTML("beforeend",ui.correct_icon);
        quiz.sum_correct += 1;
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
    ui.btn_start.classList.add('display-none')
    ui.showQuestion(quiz.callQuestion());
    
});

ui.btn_next.addEventListener('click',function(){
    ui.btn_next.classList.remove('display');
    if (quiz.questionList.length-1 > quiz.questionIndex) {
        quiz.questionIndex += 1;
        ui.showQuestion(quiz.callQuestion());

    }
    else { 
        ui.score_box.classList.add("display");
        ui.quiz_box.classList.remove("display");
        ui.showScore(quiz.questionList.length,quiz.sum_correct);
    }


});

ui.btn_replay.addEventListener('click',function(){
    quiz.questionIndex = 0;
    quiz.sum_correct = 0;
    ui.btn_start.click();
    ui.score_box.classList.remove("display");
});

ui.btn_quit.addEventListener('click',function(){
    window.location.reload();
});

