#Practicing calculations with currency exchange
print("Let's exchange our trip money back into dollars!")
pesos = int(input('What do you have left in pesos? '))
reais = int(input('What do you have left in reais? '))
soles= int(input('What do you have left in soles? '))
dollars= int((pesos*.06)+(reais*.21)+(soles*.28))
print("You have $"+str(dollars)+" left from your trip!")