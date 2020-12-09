extensions = {
    "Text Files":[".doc",".docx",".log",".msg",".odt",".pages",".rtf",".tex",".tif",".tiff",".txt",".wpd",".wps"],
    "Data Files":[".csv",".dat",".ged",".key",".keychain",".pps",".ppt",".pptx",".sdf",".tar",".tax2016",".tax2019",".vcf",".xml"],
    "Audio Files":[".aif",".iff",".m3u",".m4a",".mid",".mp3",".mpa",".wav",".wma"],
    "Video Files":[".3g2",".3gp",".asf",".avi",".flv",".m4v",".mov",".mp4",".mpg",".rm",".srt",".swf",".vob",".wmv"],
    "3D Image Files":[".3dm",".3ds",".max",".obj"],
    "Raster Image Files":[".bmp",".dds",".gif",".heic",".jpg",".png",".psd",".pspimage",".tga",".thm",".yuv",".jpeg"],
    "Vector Image Files":[".ai",".eps",".svg"],
    "Page Layout Files":[".indd",".pct",".pdf"],
    "Spreadsheet Files":[".xlr",".xls",".xlsx"],
    "Database Files":[".accdb",".db",".dbf",".mdb",".pdb",".sql"],
    "Executable Files":[".apk",".app",".bat",".cgi",".com",".exe",".gadget",".jar",".wsf"],
    "Game Files":[".b",".dem",".gam",".nes",".rom",".sav"],
    "CAD Files":[".dwg",".dxf"],
    "GIS Files":[".gpx",".kml",".kmz"],
    "Web Files":[".asp",".aspx",".cer",".cfm",".crdownload",".csr",".css",".dcr",".htm",".html",".js",".jsp",".php",".rss",".xhtml"],
    "Plugin Files":[".crx",".plugin"],
    "Font Files":[".fnt",".fon",".otf",".ttf"],
    "System Files":[".cab",".cpl",".cur",".deskthemepack",".dll",".dmp",".drv",".icns",".ico",".lnk",".sys"],
    "Settings Files":[".cfg",".ini",".prf"],
    "Encoded Files":[".hqx",".mim",".uue"],
    "Compressed Files":[".7z",".cbr",".deb",".gz",".pkg",".rar",".rpm",".sitx",".tar.gz",".zip",".zipx"],
    "Disk Image Files":[".bin",".cue",".dmg",".iso",".mdf",".toast",".vcd"],
    "Developer Files":[".c",".class",".cpp",".cs",".dtd",".fla",".h",".java",".lua",".m",".pl",".py",".sh",".sln",".swift",".vb",".vcxproj",".xcodeproj"],
    "Backup Files":[".bak",".tmp"],
    "Misc Files":[".ics",".msi",".part",".torrent"],

}

def getExtensionCategory(extension):
    extension = extension.lower()
    category = list(filter(lambda cat: extension in cat[1], extensions.items()))
    if len(category) == 0:
        return None
    else:
        return category[0][0]