class AddTanggalToCards < ActiveRecord::Migration[6.0]
  def change
    add_column :cards, :tanggal, :date
  end
end
