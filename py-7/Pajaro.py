from class_mascota import Mascota

class Pajaro(Mascota):
    def __init__(self, nombre, edad):
        super().__init__(nombre, edad)
        self.especie = 'Pájaro'

    def volar(self):
        pass

    def emitir_sonido(self):
        super().emitir_sonido()
        print('Pio pio')

    def __str__(self):
        cadena = super().__str__()
        cadena += f', Especie: {self.especie}'
        return cadena
'''
p1 = Pajaro('Piolin', 1)
print(p1)
p1.emitir_sonido()

'''