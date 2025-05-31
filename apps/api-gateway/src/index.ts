import Fastify from 'fastify';

const server = Fastify();

server.get('/', async (request, reply) => {
  return { message: 'API Gateway running' };
});

server.listen({ port: 4000 }, err => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log('API Gateway running on http://localhost:4000');
});
