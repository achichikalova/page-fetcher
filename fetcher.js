const request = require('request');
const fs = require('fs');

const path = process.argv[3];
const domain = process.argv[2];

request(domain, (error, response, body) => {
  if (error) {
    console.log('error:', error);
  }
  fs.writeFile(path, body, function(error) {
    if (error) {
      console.log('error:', error);
    } else {
      let lengthBytes = response.headers['content-length'];
      console.log(`Downloaded and saved ${lengthBytes} bytes to ${path}`);
    }
  });
});
