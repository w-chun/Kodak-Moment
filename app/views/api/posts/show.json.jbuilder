json.partial! '/api/posts/post', post: @post
json.likes @post.likes.count
json.liked @post.likes.any?{ |like| like.user_id == current_user.id }
