json.partial! "api/follows/follow", follow: @follow
json.set! @follow.id do
  json.following @follow.followee.username
  json.follows @follow.follower.username
end
