"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
var _app = require('./app'); var _app2 = _interopRequireDefault(_app);

_dotenv2.default.config();
// Configurações da porta do servidor
const port = process.env.APP_PORT;

// Listando a porta que o servidor está rodando
_app2.default.listen(port);
