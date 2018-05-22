json.extract! follow, :id, :follower_id, :followee_id
json.set! 'user' do
  json.partial! '/api/users/user', user: follow.user
end
