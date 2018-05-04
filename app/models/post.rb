class Post < ApplicationRecord
  validates :img_url, :author_id, presence: true

  belongs_to :user,
  primary_key: :id,
  foreign_key: :author_id,
  className: :User
end
