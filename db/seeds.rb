require "csv"

csv_text = File.read(Rails.root.join("lib", "seed", "data.csv"))

csv = CSV.parse(csv_text, :headers => true, :encoding => "ISO-8859-1")

csv.each do |row|
  i = Item.new
  i.item_name = row["name"]
  i.price = row["price"]
  i.organic = row["organic"]
  i.origin = row["origin"]
  i.save
end

puts "There are now #{Item.count} rows in the Items table"
