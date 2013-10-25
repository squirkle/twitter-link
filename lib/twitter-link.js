OAuth = require('oauth').OAuth;

var REQUEST_TOKEN_URI = "https://api.twitter.com/oauth/request_token",
    ACCESS_TOKEN_URI = "https://api.twitter.com/oauth/access_token",
    STREAM_API_URI = "https://stream.twitter.com/1/statuses/filter.json";

var TwitterLink = function (auth) {
  this.auth = auth;
  this.oa = new OAuth(
      REQUEST_TOKEN_URI,
      ACCESS_TOKEN_URI,
      auth.consumer_key,
      auth.consumer_secret,
      "1.0A",
      null,
      "HMAC-SHA1");
};
TwitterLink.prototype.get = function (url) {
  return this.oa.get(url, this.auth.access_token, this.auth.access_token_secret);
};
TwitterLink.prototype.post = function (url) {
  return this.oa.post(url, this.auth.access_token, this.auth.access_token_secret);
};

module.exports = TwitterLink;
