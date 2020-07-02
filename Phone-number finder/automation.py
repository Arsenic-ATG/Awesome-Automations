import re,pyperclip

# create phone regex
phoneRegex = re.compile(r'''
( (\d{3}|\(\d{3}\))?                #Area code
(\s|-|\.)?                          #Seperator
(\d{3})                             #first 3 digits
(\s|-|\.)                           #seperator
(\d{4})                             #last 3 digits
 (\s*(ext|x|ext.)\s*(\d{2,5}))? )   #extension
 ''', re.VERBOSE)
 
 #create Email regex
 emailRegex = re.compile(r'''(
 [a-zA-Z0-9._%+-]+      #username
 @                      # "@" symbol
 [a-zA-Z0-9.-]+         #domain name
 (\.[a-zA-Z]{2,4})      #dot something
 )''', re.VERBOSE)
 
 #TODO : find matches to clipboard
 
 #TODO : copy matches to clipboard
