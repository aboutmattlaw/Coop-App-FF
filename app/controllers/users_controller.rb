class UsersController < ApplicationController

  # /me used for auth

  def show
    user = User.find_by(id: session[:user_id])
    if user
      render json: user, status: :ok
    else
      render json: { error: "No active session" }, status: :unauthorized
    end
  end

  # /signup used to create a new user

  def create
    user = User.create(user_params)
    if user.valid?
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: user.errors, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.permit(:first_name, :last_name, :password, :password_confirmation, :email)
  end
end
