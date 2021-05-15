from pkgs.operations import *
from pkgs.area import *

userInput = int(input(" Please select one of the option : 1. calculate area 2. calculate perimeter 3. calculate  factorial 4. calculate cube "))
inp = int(input('Please enter number : '))

if userInput == 1 :
    print(area(inp))
elif userInput == 2 :
    print(perimeter(inp))
elif userInput == 3:
    print(factorial(inp))
elif userInput == 4:
    print(cube(inp))