@comments.each do |comment|
  json.set! comment.id do
    json.id comment.id
    json.body comment.body
    json.author_id comment.author_id
    json.commenter comment.commenter.username
    json.post_id comment.post.id
  end
end
