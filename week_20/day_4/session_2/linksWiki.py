import requests
from bs4 import BeautifulSoup

url = "https://en.wikipedia.org/wiki/Python_(programming_language)"
r = requests.get(url)
htmlDoc = r.text
soup = BeautifulSoup(htmlDoc, 'html.parser')

for link in soup.find_all('a'):
    print(link)
    print('------------------------------------------------')
