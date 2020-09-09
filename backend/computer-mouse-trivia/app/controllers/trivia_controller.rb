require 'json'
require 'rest-client'
require 'pry'
require 'pp'

class TriviaController < ApplicationController
    def index
        # # ruby code should we decide to use backend for API call
        # url = 'https://opentdb.com/api.php?amount=5&category=18&type=multiple'
        # my_results = JSON.parse(RestClient.get(url))["results"]
        # my_result = my_results[0]
        # correct_answer = my_result["correct_answer"]
        # incorrect_answers = my_result["incorrect_answers"]
        # incorrect_answers = incorrect_answers.map() do |answer|
        #     {
        #         text: answer,
        #         is_correct: false
        #     }
        # end
        # correct_answer = {
        #     text: correct_answer,
        #     is_correct: true
        # }
        
        # all_answers = incorrect_answers.concat([correct_answer]) 
    end
end

