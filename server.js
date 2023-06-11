var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://api.openweathermap.org/data/2.5/weather?appid=6044971de9553911a700114a98b9c0fd&lat=35&lon=139',
  'headers': {
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(JSON.parse(response.body).weather[1]);
});
