import random

capitals = {'Alabama': 'Montgomery', 'Alaska': 'Juneau', 'Arizona': 'Phoenix',
'Arkansas': 'Little Rock', 'California': 'Sacramento', 'Colorado': 'Denver', 'Connecticut': 'Hartford', 'Delaware': 'Dover', 'Florida': 'Tallahassee', 'Georgia': 'Atlanta', 'Hawaii': 'Honolulu', 'Idaho': 'Boise', 'Illinois': 'Springfield', 'Indiana': 'Indianapolis', 'Iowa': 'Des Moines', 'Kansas': 'Topeka', 'Kentucky': 'Frankfort', 'Louisiana': 'Baton Rouge', 'Maine': 'Augusta', 'Maryland': 'Annapolis', 'Massachusetts': 'Boston', 'Michigan': 'Lansing', 'Minnesota': 'Saint Paul', 'Mississippi': 'Jackson', 'Missouri': 'Jefferson City', 'Montana': 'Helena', 'Nebraska': 'Lincoln', 'Nevada': 'Carson City', 'New Hampshire': 'Concord', 'New Jersey': 'Trenton', 'New Mexico': 'Santa Fe', 'New York': 'Albany', 'North Carolina': 'Raleigh',
'North Dakota': 'Bismarck', 'Ohio': 'Columbus', 'Oklahoma': 'Oklahoma City', 'Oregon': 'Salem', 'Pennsylvania': 'Harrisburg', 'Rhode Island': 'Providence', 'South Carolina': 'Columbia', 'South Dakota': 'Pierre', 'Tennessee': 'Nashville', 'Texas': 'Austin', 'Utah': 'Salt Lake City', 'Vermont': 'Montpelier', 'Virginia': 'Richmond', 'Washington': 'Olympia', 'West Virginia': 'Charleston', 'Wisconsin': 'Madison', 'Wyoming': 'Cheyenne'}

number_of_quizes =3

for quizNum in range(number_of_quizes):
	# Create the quiz and answer key files.
	quizFile = open('capitalsquiz%s.txt' % (quizNum + 1), 'w')
	answerKeyFile = open('capitalsquiz_answers%s.txt' % (quizNum + 1), 'w')

	# Write out the header for the quiz.
	quizFile.write('Name:\n\nDate:\n\nPeriod:\n\n')
	quizFile.write((' ' * 20) + 'State Capitals Quiz (Form %s)' % (quizNum + 1)) 
	quizFile.write('\n\n')

	#Shuffle the order of the states.
	states = list(capitals.keys())
	random.shuffle(states)
	
	# Loop through all 50 states, making a question for each.
	for questionNum in range(50):
		# Get right and wrong answers
		correctAnswer = capitals[states[questionNum]]
		wrongAnswers = list(capitals.values())
		del wrongAnswers[wrongAnswers.index(correctAnswer)]
		wrongAnswers = random.sample(wrongAnswers, 3)
		answerOptions = wrongAnswers + [correctAnswer]
		random.shuffle(answerOptions)

		# TODO: Write the question and answer options to the quiz file.
		
		# TODO: Write the answer key to a file.