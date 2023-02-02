#!/usr/bin/python3
import random
number = random.randint(-10000, 10000)
LastD = abs(number) % 10
if number < 0:
    LastD = -LastD
print('Last digit of', number, 'is', LastD, end=" ")
if LastD > 5:
    print('and is greater than 5')
elif LastD == 0:
    print('and is 0')
else:
    print('and is less than 6 and not 0')
