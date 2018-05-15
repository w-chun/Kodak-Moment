@comments.each do |comment|
  json.set! comment.id do
    json.author_id comment.author_id
    json.commenter comment.commenter.username
  end
end
