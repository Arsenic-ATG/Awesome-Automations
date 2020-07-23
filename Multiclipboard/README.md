# Multiclipboard

Say you have the boring task of filling out many forms in a web page or soft- ware with several text fields. The clipboard saves you from typing the same text over and over again. But only one thing can be on the clipboard at a time. If you have several different pieces of text that you need to copy and paste, you have to keep highlighting and copying the same few things over and over again.

Here’s what the program does:

 - [x] The command line argument for the keyword is checked
 
 - [x] If the argument is save, then the clipboard contents are saved to the key word
 
 - [x] If the argument is list, then all the keywords are copied to the clipboard
 
 - [x] Otherwise, the text for the keyword is copied to the keyboard

 - [ ] ```delete <keyword>``` command to delete a sepcific keyword
 
 - [ ] ```delete``` command line argument that will delete all the keywords

## But how to use this program ? 🧐

- the program has to run with some command line arguments with it.

- the following is the list of keywords supported by the program:
  - ```py mcb.py save <keyword>```: when you run ```py mcb.py save spam```, the current contents of the clipboard will be saved with the keyword **spam**
  - ```py mcb.pyw <keyword>``` : to load the **saved** keyword on the clipboard (for example *spam* in this case) just use ```py mcb.pyw spam```
  - ```py mcb.pyw list``` : if the user forgets what keywords they have, they can run ```py mcb.pyw list``` to copy a list of all keywords to the clipboard
