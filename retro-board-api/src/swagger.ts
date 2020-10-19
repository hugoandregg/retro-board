import swaggerJsdoc from "swagger-jsdoc";

const options: swaggerJsdoc.Options = {
  swaggerDefinition: {
    info: {
      title: 'retro-board API',
      version: '0.1.0',
      description: 'Test endpoints for [retro-board](https://github.com/hugoandregg/retro-board).',
    }
  },
  apis: ['dist/routes/*.js']
};

export default swaggerJsdoc(options);
