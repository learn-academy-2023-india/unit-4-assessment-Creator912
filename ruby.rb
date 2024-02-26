# UNIT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# Create the code that makes all Bike specs pass.
# Run the file with the following command: $ rspec ruby_spec.rb

# Add comments to your code explaining your approach

class Bike
  
attr_accessor :model, :current_speed, :wheels
def initialize (model)
@model = model
@current_speed = 0
@wheels = 2
end

def pedals speed
@current_speed += speed
end
    
def stop speed
@current_speed -= speed
@current_speed = @current_speed >= 0 ? @current_speed: 0
end

def bike_info
"The #{@model} bike has #{@wheels} wheels and is going #{current_speed} mph."
end
end