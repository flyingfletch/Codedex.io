#Replace Multiples of 3/5/both with Fizz/Buzz/FizzBuzz
for i in range(1, 101):
    if i%3 == 0 and i%5 == 0:
        x = "FizzBuzz"
    elif i%3 == 0:
        x = "Fizz"
    elif i%5 == 0:
        x = "Buzz"
    else:
        x = i
    print(x)
    i=i+1