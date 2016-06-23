const url = require('url');

module.exports = (req) => {
  var result = url.parse(req.url, true);
  return result.query;
}
