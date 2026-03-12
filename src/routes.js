import { Database } from "./database.js";
import { randomUUID } from "node:crypto";
import { buildRoutepath } from "./utils/buildRoutePath.js";

const database = new Database();

export const routes = [
  {
    method: "GET",
    path: buildRoutepath("/users"),
    handler: (req, res) => {
      const users = database.select("users");
      return res.end(JSON.stringify(users));
    },
  },
  {
    method: "POST",
    path: buildRoutepath("/users"),
    handler: (req, res) => {
      const { name, email } = req.body;

      const user = {
        name,
        email,
        id: randomUUID(),
      };

      database.insert("users", user);

      return res.writeHead(201).end();
    },
  },
  {
    method: "DELETE",
    path: buildRoutepath("/users/:id"),
    handler: (req, res) => {
      return res.end("hello");
    },
  },
];
