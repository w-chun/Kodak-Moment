json.partial! "api/users/user", user: @user
json.followers do
  if @user.followers
    @user.followers.each do |follow|
      json.follower_id follow.follower.id
      json.username follow.follower.username
      json.profile_pic follow.follower.img_url
    end
  end
end
json.followees do
  if @user.followees
    @user.followees.each do |follow|
      json.followee_id follow.followee.id
      json.username follow.followee.username
      json.profile_pic follow.followee.img_url
    end
  end
end
