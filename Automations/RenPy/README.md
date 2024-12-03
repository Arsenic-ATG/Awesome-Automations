# RenPy: File Renaming Automation

RenPy is a Python CLI Program written to automate the renaming of files in a given directory. It sequentially renames files using a specified base name, appending a numeric index to each file while preserving its original file extension.

---

## 🛠️ Pre-requisites

- Python 3.x
- Basic knowledge of terminal or command prompt usage.

### 📝 Additional packages:

- pyfiglet

#### How do I install additional packages? 🤨

- Make sure you have python package manager (pip) installed on your system.
- Go to command line and type `pip install <library name>` { `pip3` on mac }.
- For detailed information see Python's official tutorial on [how to install packages](https://packaging.python.org/tutorials/installing-packages/).

---

## ⚡ How It Works

- The script takes two inputs:
  - **Directory**: The path to the directory containing files to be renamed.
  - **Base Name**: The prefix to use for the renamed files.
- It sorts the files in the directory based on the specified order and renames them in sequence.

For example:

- Input directory contains files: `file1.txt`, `file2.txt`.
- Base name is `Document`.
- Output: `Document-1.txt`, `Document-2.txt`.

---

### How do I use this program? 💻

- **Run the script**:
  ```bash
  python ren.py <base_name> <directory> [-r <order>] [-s]
  ```
- **Example**:
  ```bash
  python ren.py C:\Users\YourName\Documents\Folder "File"
  ```

#### Optional Arguments

- `-r <order>`: Order of renaming. Options are `alphabet` for alphabetical order, `new` for newest-to-oldest order, and `old` for oldest-to-newest order (default).
- `-s`: Simulate the renaming process without making changes.

### Example Usage

- Rename files in alphabetical order:

  ```bash
  python ren.py <base_name> <directory> -r alphabet
  ```

- Rename files from newest to oldest:

  ```bash
  python ren.py <base_name> <directory> -r new
  ```

- Rename files from oldest to newest (default):
  ```bash
  python ren.py <base_name> <directory> -r old
  ```

---

## ✨ Created by

[MFM-347](https://github.com/MFM-347)
