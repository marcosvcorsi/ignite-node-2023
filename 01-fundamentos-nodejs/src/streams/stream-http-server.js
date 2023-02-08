import http from "node:http";
import { Transform } from "node:stream";

class ConvertNumberStream extends Transform {
  _transform(chunk, encoding, callback) {
    const number = Number(chunk.toString());

    const transformed = String(number * -1);

    console.log(transformed);

    callback(null, transformed);
  }
}

const server = http.createServer(async (req, res) => {
  const buffers = [];

  for await (const chunk of req) {
    buffers.push(chunk);
  }

  const fullStreamContent = Buffer.concat(buffers).toString();

  console.log(fullStreamContent);

  return res.end(fullStreamContent);

  // return req.pipe(new ConvertNumberStream()).pipe(res);
});

server.listen(3334);
