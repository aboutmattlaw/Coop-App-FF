class ItemsController < ApplicationController

  # /items shows all items
  def index
    items = Item.all
    render json: items, status: :ok
  end

  def create
    new_item = Item.create(item_params)
    if new_item.valid?
      render json: new_item, status: :created
    else
      render json: new_item.errors, status: :unprocessable_entity
    end
  end

  private

  def item_params
    params.permit(:item_name, :aisle, :category)
  end
end
