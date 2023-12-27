const ui = new UI();

const quiz = new Quiz(questionList);


// Functions
function optionSelected(option){
    clearInterval(counter);
    clearInterval(time_line_counter);
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
let counter
function timer(time){
    counter = setInterval(timerCount,1000);
    function timerCount(){
        ui.timer_text.textContent = time;    
        time--;
        if (time < 0){
            clearInterval(counter);
            ui.btn_next.classList.add("display");
            for (let opt of ui.option_list.children){
                if (quiz.callQuestion().optionCheck(opt.querySelector('span b').textContent)){
                    opt.classList.add('correct');
                    opt.insertAdjacentHTML("beforeend",ui.correct_icon);

                }
                opt.classList.add('disabled');
            }
        }
    }
}
let time_line_counter;
function timerLine(time){
    
    let line_width = 0; 

    time_line_counter = setInterval(timer_line_interval,1000);

    function timer_line_interval(){
        
        line_width +=  1 / time*10 
        console.log(line_width);
        ui.time_line.style.width = line_width + 'px';
        if (line_width >= 997){
            clearInterval(time_line_counter);
            ui.time_line.style.width = 997 + 'px';

        }
    }
}



// Buttons

ui.btn_start.addEventListener('click',function(){
    clearInterval(counter);
    clearInterval(time_line_counter);
    timerLine(10);
    timer(10    );
    ui.quiz_box.classList.add('display')
    ui.btn_start.classList.add('display-none')
    ui.showQuestion(quiz.callQuestion());
    
});

ui.btn_next.addEventListener('click',function(){
    clearInterval(counter);
    clearInterval(time_line_counter);
    timerLine(10);
    timer(10);
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

