const fastify = require('fastify')({logger: true});
const app = require('./app');

const port = 3001;
//register app
fastify.register(app);
fastify.listen({port},  (err) => {
    if(err) {
        console.log("error : ", err);
        fastify.log.error(err);
        process.exit(1);
    }
    console.log(`Server is running up at port : ${port}`);
});
