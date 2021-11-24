class HouseholdListsController < ApplicationController


  #   def show
  #       list = HouseholdList.find_by(user_id: params[:user_id])
  #    if list
  #      render json: list, status: 200
  #    else
  #      render json: { error: 'what?' }, status: 404
  #    end
  #  end



  #  def create
  #   household_list = HouseholdList.create(household_list_params)
  #   if household_list.valid?
  #     render json: household_list, status: :created
  #   else
  #     render json: household_list.errors, status: :unprocessable_entity
  #   end
  # end

  # private

  # def household_list_params
  #   params.permit(:list_id, :user_id)
  # end

 
end
