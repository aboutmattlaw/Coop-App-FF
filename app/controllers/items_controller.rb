class ItemsController < ApplicationController

  # /plants shows all plants with notes and comments

  def index
    items = Item.all
      render json: items, status: :ok
  end

end
