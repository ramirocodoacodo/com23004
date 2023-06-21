try:
    num1 = int(input("Ingrese un número: "))  # ValueError
    num2 = int(input("Ingrese otro número: "))
    resultado = num1 / num2  # ZeroDivisionError: division by zero
except ValueError:
    print("Debe ingresar valores numéricos.")
except ZeroDivisionError:
    print("El denominador no puede ser cero.")
except:
    print("Ha ocurrido un error.")
else:
    print(resultado)  # NameError: name 'resultad' is not defined
finally:
    print("Fin del bloque try-except")

print("Fin del programa")
