var request = require('request');

function getAllCoins(callback) {
 //Configura as opções para criar a requisição a API de cotação
  var options = {
    url: 'http://api.promasters.net.br/cotacao/v1/valores',
    method:'GET',
    json: true,
    headers: {
      'User-Agent': 'request'
    }
  };
  //Callback que manusea a resposta do API
  function handleResponse(error, response, body) {
    if (!error && response.statusCode == 200) {
      return callback(null, body);
    }
    return callback(error); // or some other more robust error handling.
  }
  request(options, handleResponse);
}
//Cria o módulo pra pegar a resposta da API de cotação
exports.allCoins = getAllCoins;







