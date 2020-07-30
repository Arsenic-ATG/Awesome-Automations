# Renameing the dates from Amarican style format (MM-DD-YYYY) to European style (DD-MM-YYYY)

import shutil,os,re

# Create regex for Amarican Style dates
datePattern = re.compile(r"""^(.*?) # all text before the date
	((0|1)?\d)- 					# one or two digits for the month
	((0|1|2|3)?\d)- 				# one or two digits for the day
	((19|20)\d\d) 					# four digits for the year
	(.*?)$							# all text after the date
	""",re.VERBOSE)

# Loop over the files in the working directory. 
for amerFilename in os.listdir('.'):
	mo = datePattern.search(amerFilename)
	
	#  Skip files without a date.
	if mo == none:
		continue

	# Get the different parts of the filename.
	before_part = mo.group(1)
	month_part = mo.group(2)
	day_part = mo.group(4)
	year_part = mo.group(6)
	after_path = mo.group(8)

	# TODO: Form the European-style filename.

	# TODO: Get the full, absolute file paths.

	# TODO: Rename the files.