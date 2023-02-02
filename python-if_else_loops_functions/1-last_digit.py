#!/usr/bin/python3
import random
number = random.randint(-10000, 10000)
LastD = number % 10
if LastD > 5:
    print('Last digit of' ,number, 'is' ,LastD, 'and is greater than 5')
elif (LastD < 6 and LastD !=0):
    print('Last digit of' ,number, 'is' ,LastD, 'and is less than 6 and not 0')
elif LastD == 0:
    print('Last digit of' ,number, 'is' ,LastD, 'and is 0')
