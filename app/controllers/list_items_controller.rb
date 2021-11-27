class ListItemsController < ApplicationController
   
    def index
        list_items = List.list_items.all
          render json: list_items, status: :ok
      end



      def create
        new_list_item = ListItems.create(list_params)
        if list.valid?
          render json: new_list_item, status: :created
        else
          render json: new_list_item.errors, status: :unprocessable_entity
        end
      end

      private
    
      def list_items_params
        params.permit(:list_id, :item_id, :quantity, :acquired)
      end



end
