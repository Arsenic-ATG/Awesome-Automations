import os
import shutil  # for moving and copyinf items

def makefolder(filelist):
    # make folders according to file extensions
    extlst= []  # stores folder name accordinf to extinction
    for items in filelist:
        if items.endswith(".txt"):
            extlst.append("Text_File")
            
        elif items.endswith(".mp3"):
            extlst.append("Music")

        elif items.endswith(".png") or items.endswith(".PNG") or items.endswith(".jpeg") or items.endswith(".jpg"):
            extlst.append("Pictures")

        elif items.endswith(".mp4") or items.endswith(".mkv"):
            extlst.append("Videos")

        elif items.endswith(".pdf") or items.endswith(".docs") or items.endswith(".xlxs"):
            extlst.append("Documents") 

        elif items.endswith(".py"):
            extlst.append("Python")

        elif items.endswith(".js"):
            extlst.append("Javascript")
    extlst = list(dict.fromkeys(extlst))  # removes duplicate items from the list
    for items in extlst:
        try:
            os.mkdir(items)
        except FileExistsError:
            continue

def organise(filelist):
    # moves files in folders accordind to their extentions
    for items in filelist:
        if items.endswith(".txt"):
            loc = os.getcwd() + "\Text_Files"
            shutil.move(items, loc)
            
        elif items.endswith(".mp3"):
            loc = os.getcwd() + "\Music"
            shutil.move(items, loc)
            

        elif items.endswith(".png") or items.endswith(".jpeg") or items.endswith(".jpg"):
            loc = os.getcwd() + "\Pictures"
            shutil.move(items, loc)
            

        elif items.endswith(".mp4") or items.endswith(".mkv"):
            loc = os.getcwd() + "\Videos"
            shutil.move(items, loc)
            

        elif items.endswith(".pdf") or items.endswith(".docx") or items.endswith(".xlxs"):
            loc = os.getcwd() + "\Documents"
            shutil.move(items, loc)
             

        # elif items.endswith(".py"):
        #     loc = os.getcwd() + "\Python"
        #     shutil.move(items, loc)
            

        elif items.endswith(".js"):
            loc = os.getcwd() + "\Javascript"
            shutil.move(items, loc)
            
if __name__=='__main__':
    filelist = []
    if len(os.listdir())==1:
        print("Folder is empty")
        inp = input("Press any key to continue")
        exit()
    else:
        for folders, subfolder, files in os.walk(os.getcwd()):
            for items in files:
                filelist.append(items)
        print(filelist)
        makefolder(filelist)
        organise(filelist)
        print("Done!!!")
        inp = input("Press any key to continue......")