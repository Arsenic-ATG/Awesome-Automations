import requests
import os
from bs4 import BeautifulSoup

source = requests.get("https://fileinfo.com/filetypes/common")
soup = BeautifulSoup(source.content,'html.parser')

file_categories = soup.find_all('table', class_="list common browselist")

with open("files.txt", "w+") as file:
    for category_data in file_categories:
        cateogry_name = category_data.select_one("th").get_text()
        category_extensions = category_data.select("td a")
        file.write(f'"{cateogry_name}":[')
        idx = 0
        for extension in category_extensions:
            file.write(f'"{extension.get_text().lower()}"')
            if idx != len(category_extensions)-1:
                file.write(',')
            idx += 1 
        file.write("],\n")