#WHILE LOOP number guessing program
tries = 0
guess = 0

while guess != 6 and tries < 5:
    guess = int(input("Guess the number:  "))   
    tries= tries + 1

if guess == 6:
    print("You got it!")
else:
  print("You lose!")