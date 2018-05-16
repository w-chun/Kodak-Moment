json.extract! post, :id, :img_url, :author_id, :caption
json.set! "user" do
  json.partial! 'api/users/user', user: post.user
end
json.comments post.comments.map(&:id)
