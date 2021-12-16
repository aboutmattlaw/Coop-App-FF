ActiveRecord::Schema.define(version: 2021_12_03_134137) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "household_lists", force: :cascade do |t|
    t.integer "user_id"
    t.integer "list_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "housemates", force: :cascade do |t|
    t.integer "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "items", force: :cascade do |t|
    t.string "item_name"
    t.integer "aisle"
    t.string "category"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "organic"
    t.string "origin"
    t.string "price"
    t.integer "cost"
  end

  create_table "list_items", force: :cascade do |t|
    t.integer "list_id"
    t.integer "item_id"
    t.integer "quantity", default: 1
    t.boolean "acquired", default: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "lists", force: :cascade do |t|
    t.string "list_name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "user_id"
  end

  create_table "notes", force: :cascade do |t|
    t.integer "user_id"
    t.integer "list_item_id"
    t.text "note_text"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end
end
