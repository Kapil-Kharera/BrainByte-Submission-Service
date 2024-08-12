const fastifyPlugin = require('fastify-plugin');
const servicePlugin = require('./services/servicePlugin');

async function app(fastify, options) {
    fastify.register(require('@fastify/cors'));

    
    //register service plugin
    fastify.register(servicePlugin);
    
    //register test routes
    // fastify.register(require('./routes/testRoutes'), {prefix: '/test'});
    fastify.register(require('./routes/api/apiRoutes'), {prefix: '/api'});
}

module.exports = fastifyPlugin(app);