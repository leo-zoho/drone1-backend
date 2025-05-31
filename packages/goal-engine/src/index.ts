import Fastify from 'fastify';

const server = Fastify();

server.post('/objectives', async (request, reply) => {
  const body = request.body;
  return { message: 'Objective received', data: body };
});

server.listen({ port: 4001 }, err => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log('Goal Engine running on http://localhost:4001');
});
