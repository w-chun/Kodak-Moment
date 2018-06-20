@users.each do |user|
    json.set! user.id do
    json.partial! '/api/users/user', user: user
    json.followed user.followers.any?{ |follower| follower.follower_id == current_user.id }
  end
end
