class ListItemsController < ApplicationController
   
    def index
        list_items = ListItem.all
          render json: list_items, status: :ok
      end


      def show
        list_item = ListItem.find_by(id: params[:id])
     if list_item
      list_item.update(update_list_item_params)
       render json: list_item, status: 202
     else
       render json: { error: 'what?' }, status: unprocessable_entity
     end
   end


      def create
        new_list_item = ListItem.create(list_items_params)
        if new_list_item.valid?
          render json: new_list_item, status: :created
        else
          render json: new_list_item.errors, status: :unprocessable_entity
        end
      end


  



      def update
        update_list_item = ListItem.find_by(id: params[:id])
     if update_list_item
      update_list_item.update(update_list_item_params)
       render json: update_list_item, status: 202
     else
       render json: { error: 'what?' }, status: unprocessable_entity
     end
   end




   def destroy
    remove_list_item = ListItem.find_by(id: params[:id])
 if remove_list_item
  remove_list_item.destroy
   render json: {}, status: 404
 else
   render json: { error: 'item already deleted' }, status: unprocessable_entity
 end
end



      private
    
      def list_items_params
        params.permit(:list_id, :item_id, :quantity, :acquired)
      end

      def update_list_item_params
        params.permit(:quantity, :acquired)
      end


end
