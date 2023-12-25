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
