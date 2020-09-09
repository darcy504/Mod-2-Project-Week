# # movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
# #   Character.create(name: 'Luke', movie: movies.first)
Score.destroy_all
User.destroy_all 

user1 = User.create name: "Jenn"
user2 = User.create name: "Matt"
user3 = User.create name: "Darcy"
user4 = User.create name: "Stuart Little"
user5 = User.create name: "Remy"
user6 = User.create name: "Minnie"


Score.create number: 20, user: user6
Score.create number: 30, user: user5
Score.create number: 50, user: user4
Score.create number: 80, user: user3
Score.create number: 60, user: user2
Score.create number: 50, user: user1