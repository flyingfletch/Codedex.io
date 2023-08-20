#Figure out what Hogwarts house you belong to
print("Answer the questions with the numbers next to the answers")
gd = 0
rc = 0
hp = 0
sr = 0
q1 = int(input("Do you like Dawn(1) or Dusk(2)?"))
if q1 == 1:
    gd = gd + 1 
    rc = rc + 1
elif q1 == 2:
    hp = hp + 1
    sr = sr + 1
else:
    print("Wrong input.")

q2 = int(input("When I'm dead, I want people to remember me as: The Good(1) The Great(2) The Wise(3) The Bold(4)"))
if q2 == 1:
    hp = hp + 2
elif q2 == 2:
    sr = sr + 2
elif q2 == 3:
    rc = rc + 2
elif q2 == 4:
    gd = gd + 2
else:
    print("Wrong input.")

q3 = int(input("Which kind of instrument most pleases your hear? The violin(1) The trumpet(2) The piano(3) The drum(4)"))
if q3 == 1:
    sr = sr + 4
elif q3 == 2:
    hp = hp + 4
elif q3 == 3:
    rc = rc + 4
elif q3 == 4:
    gd = gd + 4
else:
    print("Wrong input.")

if gd > rc and gd > hp and gd > sr:
    print("You are a Gryffindor!🦁")
elif rc > gd and rc > hp and rc > sr:
    print("You are a Ravenclaw!🦅")
elif hp > gd and hp > rc and hp > sr:
    print("You are a Hufflepuff!🦡")
elif sr > gd and sr > rc and sr > hp:
    print ("You are a Slytherin!🐍")
else:
    print("You have inputted too many wrong answers. Try again!")