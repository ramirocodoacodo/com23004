class NumeroNegativoError(Exception):
    pass

num = int(input("Ingrese un número: "))
if num < 0:
    raise NumeroNegativoError("El número debe ser positivo o cero.")
print(num)
