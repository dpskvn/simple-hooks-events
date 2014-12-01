var request = require('request');

var Hooks = function(apiKey) {
  if (!apiKey) {
    throw new Error("An API key is needed for API calls");
  }
  this.apiKey = apiKey;
  this.url = "http://hooks.events/hooks/post.php";
}

Hooks.prototype.send = function(title, message, cb) {
  request.post(this.url, {
    form: {
      "hooksTitle": title,
      "hooksMessage": message,
      "hooksApi": this.apiKey
    }
  }, function(err, response) {
    if (response.body === "found") {
      return cb(true);
    } else {
      return cb(false);
    }
  });
};


module.exports = Hooks;