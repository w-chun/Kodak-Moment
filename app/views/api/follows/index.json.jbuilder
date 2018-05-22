@follows.each do |follow|
  json.set! follow.id do
    json.partial! 'api/follows/follow', follow: follow
    json.followee follow.followee.username
    json.follower follow.follower.username
  end
end
