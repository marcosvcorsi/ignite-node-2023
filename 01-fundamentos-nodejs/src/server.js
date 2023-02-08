import http from "node:http";
import { json } from "./middlewares/json.js";

const users = [];

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  console.log({ method, url });

  await json(req, res);

  if (method === "GET" && url === "/users") {
    return res.end(JSON.stringify(users));
  }

  if (method === "POST" && url === "/users") {
    const user = {
      id: Date.now(),
      name: req.body.name,
      age: req.body.age,
    };

    users.push(user);

    return res.end(JSON.stringify(user));
  }
});

server.listen(3000);
