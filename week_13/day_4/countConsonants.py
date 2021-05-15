vowels = ["a", "e", "i", "o", "u"]
ip = input("Please enter the list of strings seperated with space : ")
strings = ip.split(' ')

for string in strings:
    count = 0
    for vowel in vowels:
        count += string.count(vowel)
    print(len(string)-count)