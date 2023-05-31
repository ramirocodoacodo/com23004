import random

def mostrar_lista(lista):
    for valor in lista:
        print(valor, end=' ')
    print()

def calcular_prom_suma(lista):
    suma = sum(lista)
    cont = len(lista)
    prom = suma / cont
    return prom, suma  # Tupla, ejemplo: (16.0, 96)

def duplicar(lista):
    # for valor in lista:
    #     valor *= 2
    #     print(valor)
    for i in range(len(lista)):  # 0..5
        lista[i] *= 2  #  lista[i] =  lista[i] * 2

numeros = [1,2,3,-10,100,0]
cadena = "Hola Mundo"
# cadena[0] = "h"  # TypeError: 'str' object does not support item assignment
cadena = cadena.upper()

mostrar_lista(numeros)
print(mostrar_lista(numeros))  # None
print(calcular_prom_suma(numeros))

# parámetros mutables (lista) e inmutables (cadena)

print(numeros)
duplicar(numeros)
print(numeros)

promedio, sumatoria = calcular_prom_suma(numeros)

# Paso por valor y por referencia
def fx_cuadrado(num):
    num **= 2
    return num

# fx lambda/anonima/callback
cuadrado = lambda num:num**2

print(cuadrado(4))

cuadrados = list(map(lambda num:num**2, numeros))
mostrar_lista(cuadrados)

# import
def crear_lista(n):
    lista = []
    for _ in range(n):
        lista.append(random.randint(1, 10))

    return lista

nueva_lista = crear_lista(100)
print(nueva_lista)
