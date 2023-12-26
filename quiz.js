function Quiz(questionList){
    this.questionList = questionList;
    this.questionIndex = 0;
    this.sum_correct = 0;
}

Quiz.prototype.callQuestion = function(){
    return this.questionList[this.questionIndex];
}