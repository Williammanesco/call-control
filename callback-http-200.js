const callback = (err, data, res) => {
  if (err) return console.log('Erro:', err);

  res.writeHead(200, {'Content-Type': 'application/json'});
  return res.end(JSON.stringify(data));
}

module.exports = callback;
