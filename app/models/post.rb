# == Schema Information
#
# Table name: posts
#
#  id         :integer          not null, primary key
#  img_url    :string           not null
#  author_id  :integer          not null
#  caption    :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Post < ApplicationRecord
  validates :img_url, :author_id, presence: true

  belongs_to :user,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: :User

  has_many :likes,
  primary_key: :id,
  foreign_key: :post_id,
  class_name: :Like
end
