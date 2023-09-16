#Determine if someone can ride "The Cyclone" if they are tall enough and have enough credits
height = int(input("What is your height in cm? "))
credits = int(input("How many credits do you have? "))

if height >= 137 and credits >= 10:
    print("Enjoy the ride!")
elif height < 137 and credits >= 10:
    print("You are not tall enough to ride.")
elif height >= 137 and credits < 10:
    print("You do not have enough credits.")
else:
    print("You aren't tall enough or have enough credits to ride.")