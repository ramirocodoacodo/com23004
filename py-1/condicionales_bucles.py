# Condicionales y Bucles
# Ingresar una calificación (1 a 10) y categorizar

'''
if nota >= 7:
    print("PROMOCIONA")  # Indentación
else:
    if nota >= 4 and nota < 7:
        print("APRUEBA")
    else:
        print("DESAPRUEBA")

'''


# 3.11: switch

# Ingresar notas (hasta ingresar 0) y calcular el promedio. 
suma = 0
cont = 0
nota = int(input("Ingrese una nota: "))
# while not(nota >= 1 and nota <= 10):
while nota < 0 or nota > 10:
    print("Datos no válidos.")
    nota = int(input("Ingrese una nota: "))

while nota != 0:
    suma = suma + nota
    cont += 1  # cont = cont + 1

    if nota >= 7:
        print("PROMOCIONA")  # Indentación
    elif nota >= 4 and nota < 7:
        print("APRUEBA")
    else:
        print("DESAPROBADO")

    nota = int(input("Ingrese una nota: "))
    while nota < 0 or nota > 10:
        print("Datos no válidos.")
        nota = int(input("Ingrese una nota: "))

if cont != 0:
    promedio = suma / cont
    print("El promedio es:", promedio)
else: 
    print("No ha ingresado notas.")
print("fin del programa")
