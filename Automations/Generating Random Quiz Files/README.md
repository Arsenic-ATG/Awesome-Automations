# Project: generating random Quiz files

Say you’re a geography teacher with **n** students in your class and you want to give a pop quiz on indian state capitals. Alas, your class has a few bad eggs in it, and you can’t trust the students not to cheat. You’d like to randomize the order of questions so that each quiz is unique, making it impossible for any- one to crib answers from anyone else. Of course, doing this by hand would be a lengthy and boring affair. Fortunately, you know some Python.
Here is what the program does:

1) Creates **n** different quizzes.
2) Creates 29 multiple-choice questions for each quiz, in random order.
3) Provides the correct answer and three random wrong answers for each question, in random order.
4) Writes the quizzes to **n** text files
5) Writes the answer keys to **n** text files.

### screen shots 
| **NOTE:** *these screenshots were taken in macOs default text editor in dark mode. this script generates text files so result may vary according to the text editor you are using* |
| --- |
- one of the question paper generated 
![question paper](https://github.com/Arsenic-ATG/python-automations/blob/master/Generating%20Random%20Quiz%20Files/screen%20shots/Screenshot%202020-07-16%20at%202.41.05%20PM.png)

- answer key would look like this **(NOTE: this is not the answer key of above question paper)**
![answer key](https://github.com/Arsenic-ATG/python-automations/blob/master/Generating%20Random%20Quiz%20Files/screen%20shots/Screenshot%202020-07-15%20at%201.44.34%20PM.png)

- every folder with unique name

![icons](https://github.com/Arsenic-ATG/python-automations/blob/master/Generating%20Random%20Quiz%20Files/screen%20shots/Screenshot%202020-07-15%20at%201.45.08%20PM.png)

### How to use this program ? 💻
- Run this script using [command line](https://www.cs.bu.edu/courses/cs108/guides/runpython.html) or your favorite python IDE
- By default it runs for 3 students(hence generates 3 different quizes) you can change then number of quizes by changing the value of **number_of_quizes** variable in the script uing your favorite text editor

### Additional packages 📝
- No additional packages 🙂

#### But how do I install additonal packages? 🤨
- Make sure you have python installed on your system
- Go to command line and type ```pip install <library name>```
- For further information see [python's official tutorial on how to install packages](https://packaging.python.org/tutorials/installing-packages/)

