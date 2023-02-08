import { Readable, Writable, Transform } from "node:stream";

// process.stdin.pipe(process.stdout);

class OneToHundredStream extends Readable {
  index = 1;

  _read() {
    const i = this.index++;

    setTimeout(() => {
      if (i >= 100) {
        this.push(null);
      } else {
        const buf = Buffer.from(String(i));

        this.push(buf);
      }
    }, 1000);
  }
}

class MultiplyByTenStream extends Writable {
  _write(chunk, encoding, callback) {
    console.log(Number(chunk.toString()) * 10);

    callback();
  }
}

class ConvertNumberStream extends Transform {
  _transform(chunk, encoding, callback) {
    const number = Number(chunk.toString());

    callback(null, String(number * -1));
  }
}

new OneToHundredStream()
  .pipe(new ConvertNumberStream())
  .pipe(new MultiplyByTenStream());
