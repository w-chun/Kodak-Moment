class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new
    @follow.followee_id = params[:followee_id]
    @follow.follower_id = current_user.id
    if @follow.save
      @user = @follow.followee
      render 'api/users/show'
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def followers
    @follows = Follow.where(followee_id: params[:user_id])
    render 'api/follows/index'
  end

  def followees
    @follows = Follow.where(follower_id: params[:user_id])
    render 'api/follows/index'
  end

  def show
    @follow = Follow.find_by(id: params[:id])
    render 'api/follows/show'
  end

  def destroy
    @follow = Follow.find_by(follower_id: params[:follower_id], followee_id: params[:followee_id])
    @user = @follow.followee
    @follow.destroy
    render 'api/users/show'
  end
end
