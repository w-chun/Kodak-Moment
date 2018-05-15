json.set! @comment.id do
  json.post_id @comment.post.id
  json.commenter @comment.commenter.username
  json.author_id @comment.author_id
end 
