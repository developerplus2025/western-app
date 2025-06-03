sum = 0
x = -24
for i in range (1,20) :
    a = 0
    if i %2 != 0 :
        a = 25*(x**i)
    else:
        a = 25*(x**i)
    sum = sum + a
print(x**20+sum + 25)