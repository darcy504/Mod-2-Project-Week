require 'json'
require 'rest-client'
require 'pry'

class TriviaController < ApplicationController
    def index
        response = RestClient.get 'https://opentdb.com/api.php?amount=5&category=18&type=multiple'
        data = JSON.parse(response)
        byebug


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