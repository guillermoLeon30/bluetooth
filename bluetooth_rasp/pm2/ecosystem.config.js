/**
 * Ajustar los valores de URL_API y PUERTO en el env, donde:
 * 
 * URL_API: es la direccion donde se enviaran los datos en formato json 
 *          ejm: http://www.web.com/bluetooth, los datos son enviados por el metodo POST
 *          con el siguiente formato { major: xxxx, minor: xxx }
 * 
 * PURTO: es el puerto donde apunta la api http://www.web.com:4000/bluetooth
 * 
 * Para activar la aplicacion usar el comando pm2 start ecosystem.config.js y luego pm2 save
 * 
 */

module.exports = {
  apps: [{
    name: 'bluetooth',
    script: '/home/pi/Documents/bluetooth/bluetooth2/src/app.js',
    exp_backoff_restart_delay: 100,
    error_file: '/home/pi/Documents/pm2/logs/bluetooth/err.log',
    out_file: '/home/pi/Documents/pm2/logs/bluetooth/out.log',
    time: true,
    env: {
      'URL_API': '', // <------ cambiar aqui
      'PUERTO': 4000 // <------ cambiar aqui
    }
  }]
}
