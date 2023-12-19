
function Question(questionText, options, correctOption){
    this.questionText = questionText;
    this.options = options;
    this.correctOption = correctOption;

}

Question.prototype.optionCheck = function(answer) {
    return answer == this.correctOption
}

let questionList = [
    question1 = new Question("Hangisi dünya üzerinde en fazla konuşulan dillerden biridir?", {"A":"İngilizce","B":"Mandarin Çincesi","C":"İspanyolca","D":"Türkçe"},"A"),
    
    question2 = new Question("Hangisi bir yıldızın içerdiği elementlerin nihai aşamasıdır?", {"A":"Karbon","B":"Demir","C":"Helyum"},"B"),
    
    question3 = new Question("Bir doğal sayı dizisi olan Fibonacci dizisinde, her sayı önceki iki sayının toplamıdır (ilk iki sayı 1 ve 1'dir). Fibonacci dizisindeki 10. sayı nedir?", {"A":"34","B":"55","C":"87"},"B"),
    
    question4 = new Question("0 Çift sayıdır" , {A:"Doğru", B:"Yanlış"} , "A")
    ]


function Quiz(questionList){
    this.questionList = questionList;
    this.questionIndex = 0;
}

Quiz.prototype.callQuestion = function(){
    return this.questionList[this.questionIndex];
}


const optionList = document.querySelector('.quiz-optionList');  

function showQuestion(question){
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

    const question_text = document.querySelector('.quiz-question-text'); 
    question_text.innerHTML  = questionTXT;

    optionList.innerHTML = options;

    const option = optionList.querySelectorAll(".quiz-option");
    console.log(option);

    for (let opt of option){
        opt.setAttribute("onclick","optionSelected(this)")
    };
}

function optionSelected(option){
    let answer = option.querySelector("span b").textContent;
    console.log(answer);

    let question = quiz.callQuestion();

    if (question.optionCheck(answer)){
        option.classList.add("correct");
    }else{
        option.classList.add("incorrect");
    }
}

const quiz = new Quiz(questionList);

document.querySelector('.btn-start').addEventListener('click',function(){
    document.querySelector('.quiz-box').classList.add('display')
    
    showQuestion(quiz.callQuestion());
    
});

document.querySelector('.btn-next').addEventListener('click',function(){

    if (quiz.questionList.length-1 > quiz.questionIndex) {
        quiz.questionIndex += 1;
        showQuestion(quiz.callQuestion());

    }
    else { 
        console.log("Quiz Bitti!");
        let endQuizText =  `<p class="quiz-question-text">Quiz Bitti!</p>`;

    }


});


