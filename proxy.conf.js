const PROXY_CONFIG = {
  '/api': {
    target: 'http://localhost:3000', // URL of your Nest.js API
    secure: false,
  },
};

module.exports = PROXY_CONFIG;
