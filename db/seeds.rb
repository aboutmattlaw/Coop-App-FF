# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)




User.create(first_name: "Aatt", last_name: "Aaw", email: "aboutmattlaw@gmail.com", password: "password123")
User.create(first_name: "Batt", last_name: "Baw", email: "aboutmattlaw@gmail.com", password: "password123")
User.create(first_name: "Catt", last_name: "Caw", email: "aboutmattlaw@gmail.com", password: "password123")

List.create!(list_name: "Aatt's List")
List.create!(list_name: "Batt's List")
List.create!(list_name: "Catt's List")

HouseholdList.create!(user_id:1, list_id:1)
HouseholdList.create!(user_id:2, list_id:2)
HouseholdList.create!(user_id:3, list_id:3)


Item.create!(item_name: "Apple")
Item.create!(item_name: "Banana")
Item.create!(item_name: "Corn")


ListItem.create!(list_id:1, item_id:1)
ListItem.create!(list_id:2, item_id:2)
ListItem.create!(list_id:3, item_id:3)

