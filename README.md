# Ejercicio de practica React

## Se debe mostrar un listado de productos provenientes de MercadoLibre
## Se debe simular un login

En cada una de las card de productos del listado debe mostrarse un contador de productos
unicamente si hay un usuario logueado sino un boton que dirija a la vista de Login.

La documentacion de la Api es la siguiente:

[API Search MercadoLibre](https://api.mercadolibre.com/sites/MLA/search)

Si hay un usuario logueado, el usuario debe poder seleccionar una cantidad y al 
presionar en Agregar al Carrito se debe mostrar en consola el nombre del producto y cantidad.

El login debe simularse guardando el nombre de usuario ingresado en el input,
en un estado que tenga alcance por toda la aplicacion para hacer las validaciones correspondientes.
(El estado solo contendra un String)

En el Navbar debe mostrarse el CartWidget unicamente si hay un usuario logueado
Si hay un usuario logueado, el boton de login debe cambiarse por uno de logout que limpie el estado global del usuario.


