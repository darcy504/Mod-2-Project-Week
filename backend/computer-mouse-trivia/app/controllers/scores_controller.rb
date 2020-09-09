class ScoresController < ApplicationController
    def index 
        @scores = Score.all 
        render json: @scores, include: [:user]
    end

    def show 
        @score = Score.find(params[:id])
        render json: @score, include: [:user]
    end

    def create 
        @score = Score.create number: params[:number], user_id: params[:user_id]
        render json: @score 
    end
end
