from class_mascota import Mascota

class Veterinaria:
    def __init__(self, nombre):
        self.nombre = nombre
        self.__mascotas = []

    def agregar_mascota(self, m):
        self.__mascotas.append(m)
    
    def __str__(self):
        cadena = ''
        cadena += f'Nombre: {self.nombre}\n'
        cadena += 'Listado de mascotas de mi Vete: \n'
        for m in self.__mascotas:
            cadena += str(m) + '\n'
        cadena += '\n'

        return cadena
