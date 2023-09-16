#User will input the ph level and the program will say if it is neutral, acidic, or basic
ph = int(input('What is your pH level? (Between 0-14)'))

if ph > 7:
    print('Basic')
elif ph < 7:
    print('Acidic')
else:
    print('Neutral')