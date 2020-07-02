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
 
 #TODO : find matches to clipboard
 
 #TODO : copy matches to clipboard
