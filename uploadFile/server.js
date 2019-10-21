const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  if (req.url === '/api/upload') {
    res.writeHead(200, {
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*'
    });

    var splitStr = req.headers['content-type'].split('; boundary=')[1];
    var data = '';
    req.on('data', chunk => {
      data += chunk;
    });
    req.on('end', () => {
      var json = normalizeFormData(data, splitStr);
      res.end(JSON.stringify(json));
    });
  } else {
    fs.readFile('uploadFile.html', 'utf8', (err, data) => {
      if (err) {
        res.writeHead(200, {
          'Content-Type': 'application/json;charset=UTF-8'
        });
        res.end(JSON.stringify(err));
      } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
      }
    });
  }
}).listen(8901, () => {
  console.log('后端启动...')
});

function normalizeFormData(chunk, splitStr) {
  var arr = chunk.toString().split(splitStr);
  arr = arr.slice(1, arr.length - 1);
  var json = {};
  var reName = /Content-Disposition: form-data; name="(\w+)"/;
  for (var i = 0; i < arr.length; i++) {
    let arr2 = arr[i].split('\n');
    let name = arr2[1].match(reName)[1];
    if (name === 'file') {
      let reFileName = /filename="([\w-.\u4e00-\u9fa5]+)"/;
      let filename = arr2[1].match(reFileName)[1];
      json[name] = filename;
    } else {
      // 去掉尾部\r
      json[name] = arr2[3].substr(0, arr2[3].length - 1);
    }
  }
  return json
}