var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  address: {
    api: '"http://localhost:8080/prueba_laravel/public/api/"'
  }
})
