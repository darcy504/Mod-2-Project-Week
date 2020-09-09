require 'json'
require 'rest-client'
require 'pry'
require 'pp'

class TriviaController < ApplicationController
    def index
        response = RestClient.get 'https://opentdb.com/api.php?amount=5&category=18&type=multiple'
        data = JSON.parse(response)
        byebug
        questions = data{}


    end
end

# rest_client = RestClient.get 'https://opentdb.com/api.php?amount=30&category=18&type=multiple'
# results_array = JSON.parse(rest_client)
# results_array["results"].each do |trivia|
#   Trivia.create(
#     question: trivia["question"],
#     correct_answer: trivia["correct_answer"],
#     incorrect_answers: trivia["incorrect_answers"]
#   )
# end


# require 'rest-client'
# require 'json'
# require 'pry'

# response = RestClient.get('https://rickandmortyapi.com/api/character')
# data = JSON.parse(response)
# characters = data["results"]
# characters.map do |character|
#     Character.create(name: character["name"], status: character["status"], gender: character["gender"])
# end

url = ''
my_results = JSON.parse(RestClient.get(url))["results"]
my_result = my_results[0]
correct_answer = my_result["correct_answer"]
incorrect_answers = my_result["incorrect_answers"]
pp incorrect_answers
incorrect_answers = incorrect_answers.map() do |answer|
    {
        text: answer,
        is_correct: false
    }
end
correct_answer = {
    text: correct_answer,
    is_correct: true
}

all_answers = incorrect_answers.concat([correct_answer]) 

# to random array; but doesn't mutate
# .shuffle
# other methods that don't exist in JS
# .sample()
# (1..5).to_a
