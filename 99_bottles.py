#String Interpolation For Loop to sing 99 Bottles of Beer
for i in range(99, 0, -1):
    print(f'{i} bottles of beer on the wall')
    print(f'{i} bottles of beer')
    print('Take one down, pass it around')
    i = i-1
    print(f'{i} bottles of beer on the wall')
    print("")