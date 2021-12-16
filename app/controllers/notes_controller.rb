class NotesController < ApplicationController
  def create
    note = Note.create(note_params)
    if note.valid?
      render json: note, status: :created
    else
      render json: note.errors, status: :unprocessable_entity
    end
  end

  private

  def note_params
    params.permit(:user_id, :list_item_id, :note_text)
  end
end
