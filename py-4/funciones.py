def sumar(num1, num2, num3=0):  # Parámetros por defecto
    # docstring
    ''' Suma dos números recibimos por parámetro.
    '''
    resultado = num1 + num2 + num3  # Mala práctica, uso de var. glob.
    return resultado  # *Buena práctica, si hay, un sólo return, al final.

# Prog ppal
num = int(input("Ingrese un número: "))
print(sumar(1,3), end=' ')
print(sumar(num3=num,num1=1,num2=3), end=' ')

# help(sumar)
