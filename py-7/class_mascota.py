from abc import ABC, abstractmethod

class Mascota(ABC):
    # nombre = 'Vete Codo'
    def __init__(self, nombre, edad):
        # Atributos de instancia (privados)
        self.__nombre = nombre
        # self.edad = edad
        self.__edad = edad
        self.raza = ''

    # getters y setters
    @property  # decorador
    def nombre(self):
        return self.__nombre

    @property
    def edad(self):
        return self.__edad

    @edad.setter
    def edad(self, edad):
        if edad >= 0:
            self.__edad = edad

    @abstractmethod
    def emitir_sonido(self):
        print('Mascota emite sonido...')
        pass

    def __str__(self):
        cadena = 'Nombre: ' + self.__nombre + ', Edad: ' + str(self.edad)
        return cadena

class Duenio:
    pass

# Prog. ppal
def __main__():
    m1 = Mascota("Firulais", 2)
    # print(m1.__nombre)  # AttributeError: 'Mascota' object has no attribute '__nombre'
    m1.__nombre = ''
    print(m1)
    # m1.edad = 100
    print(m1)
    print(m1.nombre) 
    m1.edad = -1
    print(m1)

if __name__ == '__main__':
    # print(__name__)
    __main__()

print(__name__)

