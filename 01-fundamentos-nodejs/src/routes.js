import { randomUUID } from "node:crypto";
import { Database } from "./database.js";
import { buildRoutePath } from "./utils/build-route-path.js";

const database = new Database();

export const routes = [
  {
    method: "GET",
    path: buildRoutePath("/users"),
    handler: async (req, res) => {
      const { search } = req.query;

      const users = await database.select("users", search);

      return res.end(JSON.stringify(users));
    },
  },
  {
    method: "POST",
    path: buildRoutePath("/users"),
    handler: async (req, res) => {
      const user = {
        id: randomUUID(),
        name: req.body.name,
        age: req.body.age,
      };

      await database.insert("users", user);

      return res.end(JSON.stringify(user));
    },
  },
  {
    method: "DELETE",
    path: buildRoutePath("/users/:id"),
    handler: async (req, res) => {
      const { id } = req.params;

      console.log({ id });

      await database.delete("users", id);

      return res.writeHead(204).end();
    },
  },
  {
    method: "PUT",
    path: buildRoutePath("/users/:id"),
    handler: async (req, res) => {
      const { id } = req.params;
      const data = req.body;

      console.log({ id, data });

      await database.update("users", id, data);

      return res.writeHead(204).end();
    },
  },
];
