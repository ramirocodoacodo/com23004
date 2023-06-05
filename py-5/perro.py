# Definimos una clase
class Perro:
    # Atributo de clase
    genero = 'Canis'
    id = 0  # contador

    # Comportamiento
    # Método especial: __init__
    def __init__(self, n, edad):
        # Atributos de instancia
        self.nombre = n
        self.edad = edad
        Perro.id += 1
        self.id = Perro.id
    
    def cumplir_anios(self):
        self.edad += 1
    
    def __str__(self):
        # f-strings
        return f'ID: {self.id} - {self.nombre} tiene {self.edad} años y su género es {self.genero}.'

# Prog. ppal. (main)
perro1 = Perro('Firulais', 10)
perro2 = Perro('Firulais', 10)
print(type(perro1))
print(perro1)
print(type(perro2))
print(perro2)
print(perro1.edad)
perro1.cumplir_anios()
print(perro1.edad)
perro2.edad = 15
perro2.nombre = 'Paka'
print(perro1)
print(str(perro2))
