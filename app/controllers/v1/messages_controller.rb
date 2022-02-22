class V1::MessagesController < ApplicationController
  def index
    render json: { message: Message.all }
  end
end