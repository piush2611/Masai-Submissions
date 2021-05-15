class Rectangle:
    numberOfSides = 4

    def __init__(self, angle1, angle2, angle3, angle4):
        self.angle1 = angle1
        self.angle2 = angle2
        self.angle3 = angle3
        self.angle4 = angle4
    
    def checkAngles(self):
        if (self.angle1 + self.angle2 + self.angle3 + self.angle4) == 360 :
            print(True)
        else:
            print(False)

myRectangle = Rectangle(180, 90, 55, 45)

myRectangle.checkAngles() # False

class Square(Rectangle):
    angle = 90

    def __init__(self):
        self.angle1 = self.angle
        self.angle2 = self.angle
        self.angle3 = self.angle
        self.angle4 = self.angle
