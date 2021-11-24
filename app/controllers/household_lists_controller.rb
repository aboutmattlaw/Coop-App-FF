class HouseholdListsController < ApplicationController


    def show
        list = HouseholdList.find_by(user_id: params[:user_id])
     if list
       render json: list, status: 200
     else
       render json: { error: 'what?' }, status: 404
     end
   end
 
end
