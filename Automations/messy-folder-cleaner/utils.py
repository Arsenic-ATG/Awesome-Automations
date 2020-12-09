import os.path

def get_file_extension(filePath):
    extension = os.path.splitext(filePath)[1]
    return extension

