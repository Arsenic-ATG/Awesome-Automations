import subprocess
import os
import json
import argparse

parser = argparse.ArgumentParser()
parser.add_argument("-s", "--save", help="Path to save workspace")
parser.add_argument("-p", "--path", help="Path to load workspace")
parser.add_argument(
    "-n", "--new", help="Whether to launch on new virtual desktop", action="store_true")
args = parser.parse_args()

# Save workspace
if args.save:
    # Get all running programs
    cmd = 'powershell "gps | where {$_.MainWindowTitle } | select Path'
    proc = subprocess.Popen(cmd, shell=True, stdout=subprocess.PIPE)
    paths = []
    for i, line in enumerate(proc.stdout):
        if line.rstrip():
            # decode() is necessary to get rid of the binary string (b')
            # rstrip() to remove `\r\n`
            path = line.decode().rstrip()
            if os.path.exists(path):
                paths.append(path)

    # Save program paths to file
    json.dump(paths, open(args.save, "w"))

# Load workspace from path
if args.path:
    # Load workspace from new virtual desktop
    if args.new:
        from pyvda import VirtualDesktop, get_virtual_desktops
        import pyautogui

        # New virtual desktop
        pyautogui.hotkey('ctrl', 'win', 'd')

        # Switch to new virtual desktop
        number_of_active_desktops = len(get_virtual_desktops())
        VirtualDesktop(number_of_active_desktops).go()

    # Load paths and launch programs
    paths = json.load(open(args.path))
    for path in paths:
        try:
            # Open app in new process and detach
            subprocess.Popen([path], stderr=subprocess.STDOUT,
                             stdout=subprocess.PIPE)
        except Exception:
            pass
