class CreateOrders < ActiveRecord::Migration[5.0]
  def change
    create_table :orders do |t|
      t.references :appointment, foreign_key: true
      t.references :product, foreign_key: true
      t.integer :qty

      t.timestamps
    end
  end
end
