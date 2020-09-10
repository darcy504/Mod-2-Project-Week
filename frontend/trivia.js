const lodash = require("lodash")
console.log("this is Trivia.js with lodash installed")

const URL = 'https://opentdb.com/api.php?amount=5&category=18&type=multiple'
let questionObject = {}

fetch(URL)
    .then(response => response.json())
    .then(result =>{
        let myResult = result.results[0]
        const questionText = myResult.question
        const correctAnswer = myResult.correct_answer
        const incorrectAnswers = myResult.incorrect_answers
        updateQuestion(correctAnswer, incorrectAnswers, questionText)
    })

function updateQuestion(correctAnswer, incorrectAnswers, questionText){
    let newAnswers = incorrectAnswers.map((answer) => {
        return {
            text: answer,
            isCorrect: false,
        } 
    })
    newAnswers.push({
        text: correctAnswer,
        isCorrect: true,
    })
    questionObject["questionText"] = questionText
    questionObject["answers"] = lodash.shuffle(newAnswers)
    populateQuestionsContainer()

    // function populateQuestionsContainer(){
    //     let $questionText = document.createElement('h2')
    //     // let $newList = document.createElement('ul')
    //     let $questionsContainer = document.querySelector('#questions-container')
    //     let answerContainer = document.querySelector('#answer-container')
    //     $questionText.innerText = questionObject.questionText
    //     $questionsContainer.append($questionText)
    //     questionObject.answers.forEach(answer => {
    //         let $answer = document.createElement('p')
    //         $answer.innerText = answer.text
    //         answerContainer.append($answer)
    //     })
    // }

    function populateQuestionsContainer(){
        let $questionText = document.createElement('h2')
        let $questionsContainer = document.querySelector('#questions-container')
        $questionText.innerText = questionObject.questionText
        $questionsContainer.append($questionText)
        questionObject.answers.forEach(answer => {
            let $answer = document.createElement('p')
            $answer.innerText = answer.text
        })
    }
}

