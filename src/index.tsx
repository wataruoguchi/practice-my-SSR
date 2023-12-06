import { Hono } from "hono";
import { renderer } from "./renderer";
import { render } from "./entry-server";

const app = new Hono();

app.get("/", (c) => {
  return c.html(
    renderer({ head: "<title>Hello</title>", content: render().html }),
  );
});

export default app;
