# mcb.pyw - Saves and loads pieces of text to the clipboard.
# Usage: py.exe mcb.py save <keyword> - Saves clipboard to keyword.
# 		 py.exe mcb.py <keyword> - Loads keyword to clipboard.
# 		 py.exe mcb.py list - Loads all keywords to clipboard.

import shelve
import pyperclip
import sys

mcbShelf = shelve.open('mcb')

# Save clipboard content.
if len(sys.argv) == 3 and sys.argv[1].lower() == 'save':
    mcbShelf[sys.argv[2]] = pyperclip.paste()

# Delete a particular key in mcbShelf
elif len(sys.argv) == 3 and sys.argv[1].lower() == 'delete':
    del mcbShelf[sys.argv[2]]
elif len(sys.argv) == 2:
    # List keywords and load content. mcbShelf.close()
    if sys.argv[1].lower() == 'list':
        pyperclip.copy(str(list(mcbShelf.keys())))

    # if it is not a list then it is a keyword
    elif sys.argv[1] in mcbShelf:
        pyperclip.copy(mcbShelf[sys.argv[1]])

    # delete all keys in mcbShelf
    elif sys.argv[1].lower() == 'delete':
        mcbShelf.clear()

mcbShelf.close()
