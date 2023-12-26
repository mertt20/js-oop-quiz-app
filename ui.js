function UI() {
    this.btn_start = document.querySelector(".btn-start");
    this.btn_next = document.querySelector(".btn-next");
    this.btn_replay = document.querySelector(".btn-reply");
    this.btn_quit = document.querySelector(".btn-quit");
    this.quiz_box = document.querySelector('.quiz-box');
    this.score_box = document.querySelector('.score-box');
    this.quiz_index = document.querySelector('#quizindex');
    this.option_list = document.querySelector('.quiz-optionList'); 
    this.question_text = document.querySelector('.quiz-question-text');
    this.correct_icon = `<div><i class="fas fa-check"></i></div>`;
    this.incorrect_icon = `<div><i class="fas fa-xmark"></i></div>`;

}

UI.prototype.showQuestion = function(question){
    let questionTXT = `<p class="quiz-question-text">${question.questionText}</p>`;
    
    let options = '';
    
    for (let ans in question.options){
        options +=
        `
        <div class="quiz-option">
            <div class="quiz-option-content">
                <span ><b>${ans}</b>:</span>
                <p>${question.options[ans]}</p>
            </div>
        </div>
    
        
        `
    };

    this.question_text.innerHTML  = questionTXT;

    this.option_list.innerHTML = options;

    const option = this.option_list.querySelectorAll(".quiz-option");

    for (let opt of option){
        opt.setAttribute("onclick","optionSelected(this)")
    };


    this.quiz_index.innerHTML = `<span class="quiz-questionIndex bg-warning text-dark p-2 border border-dark rounded">${quiz.questionIndex+1}/${questionList.length}</span>`;
}

UI.prototype.showScore = function(sum_question, sum_correct){
    let score = (sum_correct/sum_question)*100;
    let tag = `<p>Puanınız: <span>${score}</span></p>`;
    document.querySelector(".score-text").innerHTML = tag;
}
