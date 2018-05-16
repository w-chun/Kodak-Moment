json.set! @comment.id do
  json.id @comment.id
  json.post_id @comment.post.id
  json.commenter @comment.commenter.username
  json.author_id @comment.author_id
  json.body @comment.body
end
