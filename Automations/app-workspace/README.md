# App workspace

Say you have the boring task of manually opening apps for your specific purpose (work, entertainment, development,...). Sometimes you may even forget how to launch a program (if it is not added to your path or is tricky to open) and that leads to more time-consuming to prepare your apps-workspace.  
This program will help you save valuable time by saving all your running apps to a file and then later allow you to load all these apps at once with a single command. It even allows you to launch those apps in a new virtual desktop (if your computer supports it).

### Additional packages 📝

- pyvda
- pyautogui

#### But how do I install additional packages? 🤨

- Make sure you have python package manager (**pip**) installed on your system
- Go to command line and type `pip install <library name>` { _pip3_ on mac }
- For detailed information see [python's official tutorial on how to install packages](https://packaging.python.org/tutorials/installing-packages/)
- You can also easily install all required package with a single command `pip install -r requirements.txt` { _pip3_ on mac }

### But how to use this program ? 💻

- The program has to run with some command line arguments with it.
- The following is the list of keywords supported by the program:
  - `python app_workspace.py --save <path>`: when you run python app_workspace.py --save apps.json, all the running apps (the path of it) will be save to the file apps.json
  - `python app_workspace.py --path <path>`: to launch all your apps saved in `<path>` (for example to load apps from apps.json file, just use `python app_workspace.py --path apps.json`)
  - `python app_workspace.py --path <path> --new`: to launch all your apps saved in `<path>` in a new virtual desktop (if your os support)
