class Bike:
    condition = "new"

    def __init__( self, model, color, average ):
        self.model = model
        self.color = color
        self.average = average
    
    def displayBike(self):
        info =  "This is a " + self.color + " " + self.model + " with " + str(self.average) + " average"
        print(info)

myBike = Bike("Gixxer", "Black", 45)

print(myBike.color)
myBike.displayBike()