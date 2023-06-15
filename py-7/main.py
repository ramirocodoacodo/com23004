from class_mascota import Mascota, Duenio
from Veterinaria import Veterinaria
from Pajaro import Pajaro
from Gato import Gato
from Perro import Perro

# Prog. Ppal
v1 = Veterinaria('Vete Codo')
m = Perro('Firulais', 10)
v1.agregar_mascota(m)
m = Gato('Neko', 4)
v1.agregar_mascota(m)
m = Pajaro('Piolin', 1)
v1.agregar_mascota(m)
print(v1)

v1.despertar_mascotas()
