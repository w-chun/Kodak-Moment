class Api::PostsController < ApplicationController
  def create
    @post = Post.new(post_params)
    @post.author_id = current_user.id
    if @post.save
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def index
    if params[:user_id]
      @posts = User.find_by(id: params[:user_id]).posts
    else
      @posts = Post.all
    end
  end

  def show
    @post = Post.find_by(id: params[:id])
    render :show
  end

  def destroy
    @post = Post.find_by(id: params[:id])
    @post.destroy
  end

  private

  def post_params
    params.require(:post).permit(:img_url, :author_id, :caption)
  end
end
