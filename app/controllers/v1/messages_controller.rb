class V1::MessagesController < ApplicationController
  def index
    render json: { message: Message.random }
  end
end
