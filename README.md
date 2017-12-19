# **Tp final de Técnicas y Tecnologías Avanzadas del Desarrollo de Software**
## Integrantes:
Emanuel Zárate, legajo: 38347

Javier Mattos, legajo: 40026
## Tema:
Nuestro sistema administrará el alquiler de diferentes salones con o sin servicio de catering.
## Descripción del sistema y funcionalidades:

Cuando una persona hace una reserva esta puede ser con o sin servicio de catering, si es con servicio el precio del salon se calcula en base al menú elegido y la cantidad de personas(precio=precio del menu * cantidad de personas), si hay niños de entre 3 a 6 años estos pagan la mitad de la tarjeta y los menores de 3 años no pagan. Si es sin servicio esta se calcula al momento de realizar la reserva.

Se registrara una persona encargada del alquiler del salon ingresando sus datos personales.

Si por cualquier motivo el cliente en el momento de la fiesta desea quedarse más horas se le cobrara las horas extras, este precio se define en el momento de la reserva. Existiendo un limite de horas extra a las cuales el cliente podrá acceder en funcion del horario en que se realiza el evento.

Un cliente puede abonar el precio del salón en cuotas, estas deberan ser registradas con su fecha y monto. Un salón se considera reservado con la primer cuota o seña, si un reserva no tiene seña esta podra ser ocupada por otro cliente que si quiera hacer una reserva con seña. Existirá una fecha limite para abonar la seña/primer cuota, en caso de no cumplirse la reserva se cancela y se lo informa al cliente.

Si en una reserva se supera la capacidad maxima del salon el sistema lo debera informar pero si el usuario lo decide la puede realizar de todas maneras.

Cada lunes se enviará un mail al usuario administrador informando todas las fistas que hay en esa semana.

Se podra imprimir un listado con todas las fiestas en el rango de fecha seleccionado por el usuario administrador, ya sea fiestas ya realizadas o por realizar.

Llegada la fecha de realizacion del evento se emitirá una lista con los datos de los invitados a modo de checklist para poder controlar el ingreso de los invitados a la misma.

Ademas el sistema servira para promocionar el alquiler de los salones mostrando fotos de 360 grados, una descripción del salon y fotos de eventos realizados.


## Modelo de Dominio

![GitHub Logo](https://github.com/EmaZarate/ttads-tp-final/blob/master/Modelo%20de%20Dominio/Modelo%20de%20Dominio.png)


