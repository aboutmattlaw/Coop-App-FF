class NoteSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :list_item_id, :note_text
end
