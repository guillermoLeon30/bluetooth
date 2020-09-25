module.exports = {
  apps: [{
    name: 'bluetooth',
    script: '/home/pi/Documents/bluetooth/bluetooth2/src/app.js',
    exp_backoff_restart_delay: 100,
    error_file: '/home/pi/Documents/pm2/logs/bluetooth/err.log',
    out_file: '/home/pi/Documents/pm2/logs/bluetooth/out.log',
    time: true,
    env: {
      'URL_API': '',
      'PUERTO': 4000
    }
  }]
}
