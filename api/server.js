const Hapi = require('@hapi/hapi');

const start = async () => {
  
  const server = Hapi.server({
    port: 3232
  });

  server.route({
    path: '/',
    method: 'GET',
    handler: (request, h) => {
      return 'Nothing here.';
    }
  });

  await server.start();
};

start();