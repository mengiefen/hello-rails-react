class Api::V1::MessagesController < ApplicationController
  def index
    @messages = Message.all
    render json: @messages, status: :ok
  end

  def random_greeting
    id = rand(1..5)
    @greeting = Message.find(id)
    render json: @greeting, status: :ok
  end
end
