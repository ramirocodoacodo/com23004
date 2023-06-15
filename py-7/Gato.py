from class_mascota import Mascota

class Gato(Mascota):
    def __init__(self, nombre, edad):
        super().__init__(nombre, edad)
        self.especie = 'Gato'

    def volar(self):
        pass

    def emitir_sonido(self):
        super().emitir_sonido()
        print('Miau')

    def __str__(self):
        cadena = super().__str__()
        cadena += f', Especie: {self.especie}'
        return cadena
