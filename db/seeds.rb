# # # Works 

url = "https://www.foodcoop.com/produce/"

parsed_page = Nokogiri::HTML(HTTParty.get(url))

item_name = parsed_page.xpath('/html/body/div/main/div/div/div[4]/table/tbody/tr/td[1]')

item_name.each do |item|
    Item.create(item_name: item.text)
  end


############ WIP ############ 

# url = "https://www.foodcoop.com/produce/"

# parsed_page = Nokogiri::HTML(HTTParty.get(url))

# item_name = parsed_page.xpath('/html/body/div/main/div/div/div[4]/table/tbody')

# item_name.each do |item|
#   item = {}

#   item[:item_name] = parsed_page.xpath('/html/body/div/main/div/div/div[4]/table/tbody/tr/td[1]/div[1]')&.text&.squish
#   item[:price] = parsed_page.xpath('/html/body/div/main/div/div/div[4]/table/tbody/tr/td[2]')&.text&.squish
#   item[:organic] = parsed_page.xpath('/html/body/div/main/div/div/div[4]/table/tbody/tr/td[3]')&.text&.squish
#   item[:origin] = parsed_page.xpath('/html/body/div/main/div/div/div[4]/table/tbody/tr/td[4]')&.text&.squish
#   Item.where(item).create
  
# end
  

############ WIP ############ 


############ OLD ############ 



# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)




# User.create(first_name: "Aatt", last_name: "Aaw", email: "aboutmattlaw@gmail.com", password: "password123")
# User.create(first_name: "Batt", last_name: "Baw", email: "a.boutmattlaw@gmail.com", password: "password123")
# User.create(first_name: "Catt", last_name: "Caw", email: "ab.outmattlaw@gmail.com", password: "password123")

# List.create!(list_name: "Aatt's List")
# List.create!(list_name: "Batt's List")
# List.create!(list_name: "Catt's List")

# HouseholdList.create!(user_id:1, list_id:1)
# HouseholdList.create!(user_id:2, list_id:2)
# HouseholdList.create!(user_id:3, list_id:3)


# Item.create!(item_name: "Apple")
# Item.create!(item_name: "Banana")
# Item.create!(item_name: "Corn")


# ListItem.create!(list_id:1, item_id:1)
# ListItem.create!(list_id:2, item_id:2)
# ListItem.create!(list_id:3, item_id:3)

