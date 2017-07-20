class CreateAppointments < ActiveRecord::Migration[5.0]
  def change
    create_table :appointments do |t|
      t.references :user, foreign_key: true
      t.datetime :appointment_time
      t.string :address

      t.timestamps
    end
  end
end
