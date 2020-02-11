const http = require('http');

const handler = (req, res) => {
  try {
      const url = new URL(`http://dummy/${req.url}`);
      const dataUrl = url.searchParams.get("d");
      const matches = dataUrl.match(/data:([^;]+);base64,(.*)/);
      if (matches === null) {
        res.writeHead(400);
        res.end("Unsupported Data URL\n");
      } else {
        const [, mimeType, base64Data] = matches;
        const buffer = Buffer.from(base64Data, "base64");
        res.writeHead(200, {
          "Content-Type": mimeType,
          "Content-Length": buffer.byteLength,
        });
        res.end(buffer);
      }
  } catch (err) {
    res.writeHead(500);
    res.end(`Sorry... ${err}\n`);
  }
};

module.exports.handler = handler;

const httpPort = process.env.PORT || 8080;
http.createServer(handler).listen(httpPort, () => {
  console.log(`Listening on ${httpPort}...`);
});
