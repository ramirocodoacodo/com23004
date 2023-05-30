# dinámicamente tipado
num = 12.5
print(type(num))
num = "Ramiro"
print(type(num))

# fuertemente tipado
print("mi nota es " + str(7))

# Contador 1 a 10
# for i in range(10):  # 0 .. 9
# for i in range(1,11):  # 1 .. 10
for i in range(1,11,2):  # 1 3 5 .. 9
    print(i, end=" ")
print()  # salto de línea

# Cadenas y listas
numeros = [1,2,3,-1,0,100]
# for valor in numeros:
for i in range(len(numeros)):  # 0 .. 5
    print(str(i) + ":", numeros[i])
