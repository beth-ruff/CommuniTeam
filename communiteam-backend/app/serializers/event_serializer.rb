class EventSerializer < ActiveModel::Serializer 
    attributes :id, :name, :description, :date, :time
    belongs_to :category
end