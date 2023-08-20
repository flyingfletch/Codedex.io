#Magic 8 Ball simulator
import random

question = input("Ask a yes or no question:")

answer = random.randint(1,9)

if answer == 9:
    print('Magic 8 Ball: Yes - definitely.')
elif answer == 8:
    print('Magic 8 Ball: It is decidedly so.')
elif answer == 7:
    print('Magic 8 Ball: Without a doubt.')
elif answer == 6:
    print('Magic 8 Ball: Reply hazy, try again.')
elif answer == 5:
    print('Magic 8 Ball: Ask again later.')
elif answer == 4:
    print('Magic 8 Ball: Better not tell you now.')
elif answer == 3:
    print('Magic 8 Ball: My sources say no.')
elif answer == 2:
    print('Magic 8 Ball: Outlook not so good.')
else:
    print('Magic 8 Ball: Very doubtful.')