import requests
from bs4 import BeautifulSoup

url = "https://en.wikipedia.org/wiki/Python_(programming_language)"

def scrape(url):
    r = requests.get(url)
    htmlDoc = r.text
    soup = BeautifulSoup(htmlDoc, 'html.parser')
    return soup.prettify()

print(scrape(url))