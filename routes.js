const routes = module.exports = require('next-routes')()

routes
.add('index', '/', 'index')
.add('especiales', '/especiales', 'especiales')
.add('eventos', '/eventos', 'eventos')
.add('reservacion', '/reservacion', 'reservacion')
.add('pedidos-adomicilio', '/pedidos-adomicilio/:plato', 'pedidos-adomicilio')
.add('administracion','/administracion','administracion')
.add('admin-ventas', '/admin-ventas', 'admin-ventas')
.add('admin-usuarios', '/admin-usuarios', 'admin-usuarios')
.add('admin-plato', '/admin-plato', 'admin-plato')
.add('admin-entregas', '/admin-entregas', 'admin-entregas')