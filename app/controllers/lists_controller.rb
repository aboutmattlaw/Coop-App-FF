class ListsController < ApplicationController


    def show
        list = List.find_by(id: params[:id])
     if list
       render json: list, status: 200
     else
       render json: { error: 'what?' }, status: 404
     end
   end
   


   def create
    list = List.create(list_params)
    if list.valid?
      render json: list, status: :created
    else
      render json: list.errors, status: :unprocessable_entity
    end
  end

  private

  def list_params
    params.permit(:list_name, :user_id)
  end

end