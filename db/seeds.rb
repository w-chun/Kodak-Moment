# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Post.destroy_all
Comment.destroy_all
Like.destroy_all
Follow.destroy_all

user1 = User.create(username: "user1", email: "user1@gmail.com", password: "password",
  img_url: "https://res.cloudinary.com/dih798zsl/image/upload/v1532975915/w9ghmss0tom8v7apabk3.jpg" )
user2 = User.create(username: "NYCblogger", email: "nycblogger@gmail.com", password: "password",
  img_url: "https://res.cloudinary.com/dih798zsl/image/upload/v1511461159/765-default-avatar_zsj3xt.png" )
user3 = User.create(username: "Fire Kickz", email: "firekickz@gmail.com", password: "password",
  img_url: "https://res.cloudinary.com/dih798zsl/image/upload/v1532985528/cxqoilmkcsl3xowg5jgb.png" )
user4 = User.create(username: "Island Life", email: "islandlife@gmail.com", password: "password",
  img_url: "https://res.cloudinary.com/dih798zsl/image/upload/v1511461159/765-default-avatar_zsj3xt.png" )
user5 = User.create(username: "Team Swoosh", email: "teamswoosh@gmail.com", password: "password",
  img_url: "https://res.cloudinary.com/dih798zsl/image/upload/v1532990442/flge9z2muinuadcnbcwk.jpg" )
user6 = User.create(username: "Sweetslover", email: "sweetslover@gmail.com", password: "password",
  img_url: "https://res.cloudinary.com/dih798zsl/image/upload/v1511461159/765-default-avatar_zsj3xt.png" )
user7 = User.create(username: "Kyle35", email: "kyle35@gmail.com", password: "password",
  img_url: "https://res.cloudinary.com/dih798zsl/image/upload/v1511461159/765-default-avatar_zsj3xt.png" )
user8 = User.create(username: "swagchamp", email: "swagchamp@gmail.com", password: "password",
  img_url: "https://res.cloudinary.com/dih798zsl/image/upload/v1511461159/765-default-avatar_zsj3xt.png" )

post1 = Post.create(img_url: "https://res.cloudinary.com/dih798zsl/image/upload/v1532975840/vrhhrfbirctgpbw1nvr3.jpg", author_id: user1.id, caption: "Pier 7")
post2 = Post.create(img_url: "https://res.cloudinary.com/dih798zsl/image/upload/v1532977535/nzmhulwjs3lhoaqidcid.jpg", author_id: user1.id, caption: "Golden Gate Bridge")
post3 = Post.create(img_url: "https://res.cloudinary.com/dih798zsl/image/upload/v1532978112/bnk96wffth8ijdvgfdrq.jpg", author_id: user1.id, caption: "SF Cable Car")
post4 = Post.create(img_url: "https://res.cloudinary.com/dih798zsl/image/upload/v1532978341/ddw8vut4w0orjvdytdg9.jpg", author_id: user1.id, caption: "The Painted Ladies")
post5 = Post.create(img_url: "https://res.cloudinary.com/dih798zsl/image/upload/v1532979065/zrpihltz1i77liwcgxz9.jpg", author_id: user1.id, caption: "The Bay Lights")
post6 = Post.create(img_url: "https://res.cloudinary.com/dih798zsl/image/upload/v1532980603/xv2ysgqi9pvgr6fdqhmy.jpg", author_id: user1.id, caption: "AT&T Park")
post7 = Post.create(img_url: "https://res.cloudinary.com/dih798zsl/image/upload/v1532982199/p0ywo0xfazyfpdauitf7.jpg", author_id: user2.id, caption: "View from the top of Rockefeller Center")
post8 = Post.create(img_url: "https://res.cloudinary.com/dih798zsl/image/upload/v1532982449/mhpce4zpssq8nh5405kt.jpg", author_id: user2.id, caption: "Brookyln Bridge")
post9 = Post.create(img_url: "https://res.cloudinary.com/dih798zsl/image/upload/v1532982754/b7xhq0x9zvkoiby8dif0.jpg", author_id: user2.id, caption: "Times Square")
post10 = Post.create(img_url: "https://res.cloudinary.com/dih798zsl/image/upload/v1532985226/tru36ay71si5hudffolv.jpg", author_id: user2.id, caption: "The most famous arena in the world")
post11 = Post.create(img_url: "https://res.cloudinary.com/dih798zsl/image/upload/v1528415015/nsp1dir7egj2lconsidq.jpg", author_id: user3.id, caption: "Bred 350s")
post12 = Post.create(img_url: "https://res.cloudinary.com/dih798zsl/image/upload/v1528236949/jz16ejcgzws2d4muspkn.jpg", author_id: user3.id, caption: "Sean Wotherspoon Air Max 1/97")
post13 = Post.create(img_url: "https://res.cloudinary.com/dih798zsl/image/upload/v1525911859/qyqjbbgvdgld3kvum7te.png", author_id: user3.id, caption: "Off-White Prestos")
post14 = Post.create(img_url: "https://res.cloudinary.com/dih798zsl/image/upload/v1526689461/aofrdeyqdwrah4voadhc.jpg", author_id: user3.id, caption: "Adidas Human Race NMDs")
post15 = Post.create(img_url: "https://res.cloudinary.com/dih798zsl/image/upload/v1532983212/jahrbjyywpcwvslw20qp.jpg", author_id: user4.id, caption: "Lanikai Beach")
post16 = Post.create(img_url: "https://res.cloudinary.com/dih798zsl/image/upload/v1532982909/jgkuwjyfvdo0fzjnddnu.jpg", author_id: user4.id, caption: "Stairway to Heaven")
post17 = Post.create(img_url: "https://res.cloudinary.com/dih798zsl/image/upload/v1525911975/r5vwhjqipsaqqqqo1prp.jpg", author_id: user5.id, caption: "Air Jordan 1 Bred Toes")
post18 = Post.create(img_url: "https://res.cloudinary.com/dih798zsl/image/upload/v1526426883/i8srgljf2zld44m3l9wo.jpg", author_id: user5.id, caption: "Kobe 1 Prelude")
post19 = Post.create(img_url: "https://res.cloudinary.com/dih798zsl/image/upload/v1532990722/eivcwzmkp8tmaeffvbnk.jpg", author_id: user6.id, caption: "Mango Bingsoo from U:Dessert Story")
post20 = Post.create(img_url: "https://res.cloudinary.com/dih798zsl/image/upload/v1532991056/xiadyavrw2m9k9k1a4uc.jpg", author_id: user6.id, caption: "Strawberry Shave Snow with Rainbow Sprinkles from Powder")
