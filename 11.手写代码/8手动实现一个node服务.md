## 8.手动写一个 node 服务器

```js
const http = require("http");
const fs = requier("fs");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    const indexFile = fs.createReadStream("./index.html");
    res.writeHead(200, { "content-Type": "text/html;charset=utf-8" });
    indexFile.pipe(res);
  }
});
server.listen(3000);
```
