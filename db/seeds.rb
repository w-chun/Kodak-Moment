# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

user1 = User.create(username: "user1", email: "user1@gmail.com", password: "password",
  img_url: "https://res.cloudinary.com/dih798zsl/image/upload/v1532975915/w9ghmss0tom8v7apabk3.jpg" )
user2 = User.create(username: "NYCblogger", email: "nycblogger@gmail.com", password: "password",
  img_url: "https://res.cloudinary.com/dih798zsl/image/upload/v1511461159/765-default-avatar_zsj3xt.png" )
user3 = User.create(username: "Fire Kickz", email: "firekickz@gmail.com", password: "password",
  img_url: "https://res.cloudinary.com/dih798zsl/image/upload/v1532985528/cxqoilmkcsl3xowg5jgb.png" )

Post.destroy_all

post1 = Post.create(img_url: "https://res.cloudinary.com/dih798zsl/image/upload/v1532975840/vrhhrfbirctgpbw1nvr3.jpg", author_id: 1, caption: "Pier 7")
post2 = Post.create(img_url: "https://res.cloudinary.com/dih798zsl/image/upload/v1532977535/nzmhulwjs3lhoaqidcid.jpg", author_id: 1, caption: "Golden Gate Bridge")
post3 = Post.create(img_url: "https://res.cloudinary.com/dih798zsl/image/upload/v1532978112/bnk96wffth8ijdvgfdrq.jpg", author_id: 1, caption: "SF Cable Car")
post4 = Post.create(img_url: "https://res.cloudinary.com/dih798zsl/image/upload/v1532978341/ddw8vut4w0orjvdytdg9.jpg", author_id: 1, caption: "The Painted Ladies")
post5 = Post.create(img_url: "https://res.cloudinary.com/dih798zsl/image/upload/v1532979065/zrpihltz1i77liwcgxz9.jpg", author_id: 1, caption: "The Bay Lights")
post6 = Post.create(img_url: "https://res.cloudinary.com/dih798zsl/image/upload/v1532980603/xv2ysgqi9pvgr6fdqhmy.jpg", author_id: 1, caption: "AT&T Park")
post7 = Post.create(img_url: "https://res.cloudinary.com/dih798zsl/image/upload/v1532982199/p0ywo0xfazyfpdauitf7.jpg", author_id: 2, caption: "View from the top of Rockefeller Center")
post8 = Post.create(img_url: "https://res.cloudinary.com/dih798zsl/image/upload/v1532982449/mhpce4zpssq8nh5405kt.jpg", author_id: 2, caption: "Brookyln Bridge")
post9 = Post.create(img_url: "https://res.cloudinary.com/dih798zsl/image/upload/v1532982754/b7xhq0x9zvkoiby8dif0.jpg", author_id: 2, caption: "Times Square")
post10 = Post.create(img_url: "https://res.cloudinary.com/dih798zsl/image/upload/v1532985226/tru36ay71si5hudffolv.jpg", author_id: 2, caption: "The most famous arena in the world")
post11 = Post.create(img_url: "https://res.cloudinary.com/dih798zsl/image/upload/v1528415015/nsp1dir7egj2lconsidq.jpg", author_id: 3, caption: "Bred 350s")
post12 = Post.create(img_url: "https://res.cloudinary.com/dih798zsl/image/upload/v1528236949/jz16ejcgzws2d4muspkn.jpg", author_id: 3, caption: "Sean Wotherspoon Air Max 1/97")
post13 = Post.create(img_url: "https://res.cloudinary.com/dih798zsl/image/upload/v1525911859/qyqjbbgvdgld3kvum7te.png", author_id: 3, caption: "Off-White Prestos")
post14 = Post.create(img_url: "http://res.cloudinary.com/dih798zsl/image/upload/v1526689461/aofrdeyqdwrah4voadhc.jpg", author_id: 3, caption: "Adidas Human Race NMDs")
