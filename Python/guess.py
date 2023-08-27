#WHILE LOOP number guessing program
tries = 0
guess = 0
import random
x=0
x=random.randint(1,9)
while guess != x and tries < 5:
    guess = int(input("Guess the number:  "))   
    tries= tries + 1

if guess == x:
    print("You got it!")
else:
  print("You lose! The number was",x,"😭")
