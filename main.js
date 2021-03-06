#!/usr/local/bin/node

var http = require('http')
  , fs = require('fs')
  ;

var server = http.createServer(function(req, res) {
  var data = [];
  var length = 0;
  var filename = 'data-' + (new Date().toString()
    .replace(/\s+GMT.*$/, '')
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/:/g, '.')
    );

  if (req.method != 'POST') {
    res.writeHead(200, {'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*'});
    res.end('Hi');
    return;
  }

  req.on('data', function(c) {
    data.push(c);

    // Error out on long requests
    length += c.length;
    if (length > 1024 * 1024) {
      data = [];
      req.removeAllListeners('data');
      req.removeAllListeners('end');
      console.log('Oversize:', filename);
      res.writeHead(413, {'Access-Control-Allow-Origin': '*', 'Content-Type': 'text/plain'});
      res.end('Nope');
    }
  });
  req.on('end', function() {
    var str = Buffer.concat(data, length).toString('utf8');

    // This dude keeps posting bogus data which pollutes the logs
    try {
      if (str.match(/___2pac/)) {
        res.writeHead(403, {'Content-Type': 'text/plain'});
        res.end('Go away, jerkwad');
        return;
      }
    } catch (err) {}

    fs.writeFile(filename, str, function(err) {
      if (err) {
        console.log('Error:', err.stack || err.message || err);
        res.writeHead(500, {'Access-Control-Allow-Origin': '*', 'Content-Type': 'text/plain'});
        res.end('Fail');
      } else {
        console.log('Wrote:', filename);
        res.writeHead(201, {'Access-Control-Allow-Origin': '*', 'Content-Type': 'text/plain'});
        res.end('Ok');
      }
    });
  });
}).listen(process.argv[2] || 80);
