import os
import sys
from pyfiglet import Figlet
import argparse

def banner():
    f = Figlet(font="speed")
    print(f.renderText("RenPy"))

def rename_files(base_name, directory, order):
    try:
        files = [f for f in os.listdir(directory) if os.path.isfile(os.path.join(directory, f))]
        
        if order == "alphabet":
            files.sort()
        elif order == "new":
            files.sort(key=lambda f: os.path.getmtime(os.path.join(directory, f)), reverse=True)
        else:
            files.sort(key=lambda f: os.path.getmtime(os.path.join(directory, f)))

        for index, filename in enumerate(files, start=1):
            file_extension = os.path.splitext(filename)[1]
            new_name = f"{base_name}-{index}{file_extension}"
            old_file = os.path.join(directory, filename)
            new_file = os.path.join(directory, new_name)
            os.rename(old_file, new_file)
            print(f"Renamed: {filename} -> {new_name}")
    except Exception as e:
        print(f"Error: {e}")

def main():
    banner()
    parser = argparse.ArgumentParser(
        description="RenPy is a Python CLI Program written to automate the renaming of files in a given directory.",
        epilog="Example usage:\n  python ren.py <base_name> <directory> -r <order>"
    )
    parser.add_argument(
        "base_name",
        type=str,
        help="Base name for the renamed files",
    )
    parser.add_argument(
        "directory",
        type=str,
        help="Path to the directory containing files to be renamed",
    )
    parser.add_argument(
        "-r", "--order",
        type=str,
        choices=["alphabet", "new", "old"],
        default="old",
        help="Order of renaming: 'alphabet' for alphabetical, 'new' for newest-to-oldest, 'old' for oldest-to-newest (default)",
    )
    parser.add_argument(
        "-s", "--simulate",
        action="store_true",
        help="Simulate the renaming process without making changes",
    )

    args = parser.parse_args()

    if not os.path.isdir(args.directory):
        print(f"Error: Directory '{args.directory}' does not exist.")
        sys.exit(1)

    if args.simulate:
        print(f"Simulation mode: Files in '{args.directory}' will be renamed to follow '{args.base_name}-<number>' in {args.order} order. No changes will be made.")
    else:
        rename_files(args.base_name, args.directory, args.order)

if __name__ == "__main__":
    main()
