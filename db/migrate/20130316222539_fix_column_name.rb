class FixColumnName < ActiveRecord::Migration
  def change
  	rename_column :sites, :type, :kind
  end
end
