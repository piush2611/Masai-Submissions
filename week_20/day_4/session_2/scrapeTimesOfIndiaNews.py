import requests
from bs4 import BeautifulSoup

url = "https://timesofindia.indiatimes.com/briefs"
r = requests.get(url)
htmlDoc = r.text
soup = BeautifulSoup(htmlDoc, 'html.parser')

for brief in soup.find_all('div', { 'class' : 'brief_box' } ):
    print(brief.text)
    print('-----')

