const testController = require("../../../../controllers/testController");

async function testRoute(fastify, options) {
    console.log("Before the callling the controller");
    fastify.get("/ping", testController.pingRequest);
    console.log("after calling controller");
}

module.exports = testRoute;