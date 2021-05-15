# input string
ip = "LEARNING python for THE first TIME           "

#  function to convert string in lowercase
def toLowercase(string):
    uppercaseAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    lowercaseAlphabets = "abcdefghijklmnopqrstuvwxyz"
    converted = ""
    for char in string:
        for j in range(26):
            if char == uppercaseAlphabets[j]:
                converted += lowercaseAlphabets[j]
            elif char == lowercaseAlphabets[j]:
                converted += lowercaseAlphabets[j]

    return converted


# function to capitalize first letter of string
def capitalizeFirstLetter(string):
    uppercaseAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    lowercaseAlphabets = "abcdefghijklmnopqrstuvwxyz"
    converted = ""

    for j in range(26):
        if string[0] == lowercaseAlphabets[j]:
            converted += uppercaseAlphabets[j]

    converted += string[1:]
    return converted
    
# function to convert string in hyphencase or snakecase
def hypencaseOrSnakecase(string, delimiter):

    strings = string.split()

    outputString = ""
    size = len(strings)

    for i in range(size):
        if i == size - 1 :
            outputString += toLowercase(strings[i])
        else:
            outputString += toLowercase(strings[i]) + delimiter
    
    return outputString

output = hypencaseOrSnakecase(ip, "_")
print( "converted string : " +  output)

# function to convert string in camelcase
def camelcase(string):

    strings = string.split()

    camelcaseString = ""

    for i in range(len(strings)):
        if i == 0:
            camelcaseString += toLowercase(strings[i])
        else:
            camelcaseString += capitalizeFirstLetter(toLowercase(strings[i]))
    
    return camelcaseString

outputOfCamelcase = camelcase(ip)
print("camelcase : " + outputOfCamelcase)