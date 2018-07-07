json.partial! "api/users/user", user: @user
json.followers @user.followers.each do |follow|
    json.follower_id follow.follower.id
    json.username follow.follower.username
    json.profile_pic follow.follower.img_url
    json.followed follow.follower.followers.any? { |follower| follower.follower_id == current_user.id }
end
json.followees @user.followees.each do |follow|
    json.followee_id follow.followee.id
    json.username follow.followee.username
    json.profile_pic follow.followee.img_url
    json.followed follow.followee.followers.any? { |follower| follower.follower_id == current_user.id }
end
json.posts_count @user.posts.count
json.followers_count @user.followers.count
json.followees_count @user.followees.count
if logged_in?
  json.followed @user.followers.any?{ |follower| follower.follower_id == current_user.id }
end
