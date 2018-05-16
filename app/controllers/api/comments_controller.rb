class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    @comment.author_id = current_user.id
    @comment.post_id = params[:post_id]
    if @comment.save
      @post = @comment.post
      render 'api/comments/show'
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def show
    @comment = Comment.find_by(id: params[:id])
    @post = @comment.post
    render 'api/comments/show'
  end

  def index
    if params[:post_id]
      @comments = Post.find_by(id: params[:post_id]).comments
    else
      @comments = Comment.all
    end
  end

  def destroy
    @comment = Comment.find_by(id: params[:id])
    if @comment
      @comment.destroy
      render 'api/comments/show'
    else
      render json: ['Cannot delete this comment'], status: 422
    end
  end

  def update
    @comment = Comment.find_by(id: params[:id])
    @post = @comment.post
    if @comment && @comment.update_attributes(comment_params)
      render 'api/comments/index'
    else
      render json: @comment.errors.full_messages, status: 401
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body)
  end
end
