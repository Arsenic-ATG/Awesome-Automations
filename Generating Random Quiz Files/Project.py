import random

capitals = {
	'Andhra Pradesh': 'Hyderabad',
	'Arunachal Pradesh': 'Itanagar',
	'Assam': 'Dispur',
	'Bihar': 'Patna',
	'Chhattisgarh': 'Raipur',
	'Goa': 'Panaji',
	'Gujarat': 'Gandhinagar',
	'Haryana': 'Chandigarh',
	'Himachal Pradesh': 'Shimla',
	'Jammu and Kashmir': 'Srinagar/Jammu',
	'Jharkhand': 'Ranchi',
	'Karnataka': 'Bengaluru',
	'Kerala': 'Thiruvananthapuram',
	'Madhya Pradesh': 'Bhopal',
	'Maharashtra': 'Mumbai',
	'Manipur': 'Imphal',
	'Meghalaya': 'Shillong',
	'Mizoram': 'Aizawl',
	'Nagaland': 'Kohima',
	'Odisha': 'Bhubaneswar',
	'Punjab': 'Chandigarh',
	'Rajasthan': 'Jaipur',
	'Sikkim': 'Gangtok',
	'Tamil Nadu': 'Chennai',
	'Telangana': 'Hyderabad',
	'Tripura': 'Agartala',
	'Uttar Pradesh': 'Lucknow',
	'Uttarakhand': 'Dehradun',
	'West Bengal': 'Kolkata'
}

number_of_quizes =3 # can be manipulated according to the users requirement

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
	for questionNum in range(29):
		# Get right and wrong answers
		correctAnswer = capitals[states[questionNum]]
		wrongAnswers = list(capitals.values())
		del wrongAnswers[wrongAnswers.index(correctAnswer)]
		wrongAnswers = random.sample(wrongAnswers, 3)
		answerOptions = wrongAnswers + [correctAnswer]
		random.shuffle(answerOptions)

		# Write the question and answer options to the quiz file.
		quizFile.write("%s. What is the capital of %s?\n" % (questionNum + 1,
            states[questionNum]))
		for i in range(4):
			quizFile.write("     %s. %s\n"%('ABCD'[i],answerOptions[i]))
		quizFile.write("\n");
		
		# Write the answer key to a file.
		answerKeyFile.write(" %s . %s\n"%(questionNum+1,'ABCD'[answerOptions.index(correctAnswer)]))
	quizFile.close()
	answerKeyFile.close()