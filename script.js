
function Question(questionText, options, correctOption){
    this.questionText = questionText;
    this.options = options;
    this.correctOption = correctOption;

}

let questionList = [
    question1 = new Question("1Lorem ipsum dolor sit amet.", {"A":"Lorem amet conpis12312icing elit.","B":"Lorem ipsum dolor sit amet consectetur adipisicing.","C":"Lorem ipsum dolor sit."},"A"),
    
    question2 = new Question("2Lorem ipsum dolor sit amet.", {"A":"2Lorem amet conpisicing elit.","B":"2Lorem ipsum dolor sit amet consectetur adipisicing.","C":"2Lorem ipsum dolor sit."},"A"),
    
    question3 = new Question("3Lorem ipsum dolor sit amet.", {"A":"3Lorem amet conpisicing elit.","B":"3Lorem ipsum dolor sit amet consectetur adipisicing.","C":"3Lorem ipsum dolor sit."},"A"),
    
    question4 = new Question("0 Çift sayıdır" , {A:"Doğru", B:"Yanlış"} , "A")
    ]


document.querySelector('.btn-start').addEventListener('click',function(){
    console.log(questionList[0])
    document.querySelector('.quiz-box').classList.add('display')
    document.querySelector('.card-body').innerHTML = `   <div class="quiz-question">
    <p class="quiz-question-text">${questionList[0].questionText}</p>
    <div class="quiz-optionList">
        <div class="quiz-option">
        <div class="quiz-option-content">
            <span >${Object.keys(questionList[0].options)[0]}:</span>
            <p>${questionList[0].options.A}</p>
        </div>
        </div>

        <div class="quiz-option correct ">
            <div class="quiz-option-content">
                <span >B:</span>
                <p>Lorem amet conpisicing elit.</p>
            </div>
            <i class="fa fa-lg fa-check"></i>
        </div>
        
        <div class="quiz-option incorrect">
            <div class="quiz-option-content">
                <span >C:</span>
                <p>Lorem amet conpisicing elit.</p>
            </div>
            <i class="fa  fa-x"></i>
        </div>
        <div class="quiz-option">
            <div class="quiz-option-content">
                <span >D:</span>
                <p>Lorem amet conpisicing elit.</p>
            </div>
            <i></i>
        </div>
    </div>
</div>`

});
let i = 0; 
document.querySelector('.btn-next').addEventListener('click',function(){
    i = i +1
    console.log(questionList[i])
    console.log(i)
    document.querySelector('.card-body').innerHTML = `   <div class="quiz-question">
    <p class="quiz-question-text">${questionList[i].questionText}</p>
    <div class="quiz-optionList">
        <div class="quiz-option">
        <div class="quiz-option-content">
            <span >${Object.keys(questionList[i].options)[i]}:</span>
            <p>${questionList[i].options.A}</p>
        </div>
        </div>

        <div class="quiz-option correct ">
            <div class="quiz-option-content">
                <span >B:</span>
                <p>Lorem amet conpisicing elit.</p>
            </div>
            <i class="fa fa-lg fa-check"></i>
        </div>
        
        <div class="quiz-option incorrect">
            <div class="quiz-option-content">
                <span >C:</span>
                <p>Lorem amet conpisicing elit.</p>
            </div>
            <i class="fa  fa-x"></i>
        </div>
        <div class="quiz-option">
            <div class="quiz-option-content">
                <span >D:</span>
                <p>Lorem amet conpisicing elit.</p>
            </div>
            <i></i>
        </div>
    </div>
</div>`

});