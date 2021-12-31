module.exports = {
  name: 'production',
  proxyServer: {
    port: 3331,
    request_host: '127.0.0.1',
    request_port: '3330'
  },
  httpServer: {
    port: 3330
  },
  api: {
    baseURL: 'https://jsonplaceholder.typicode.com'
  }
};

