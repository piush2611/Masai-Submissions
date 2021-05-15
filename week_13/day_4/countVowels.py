vowels = ["a", "e", "i", "o", "u"]
ip = input("Please enter the list of strings separated with space : ")
strings = ip.split(' ') 

for string in strings:
    count = 0
    for vowel in vowels:
        count += string.count(vowel)
    print(count)
