import { Hono } from "hono";
import { renderer } from "./renderer";
import { render } from "./entry-server";
import htmlFileDev from "../index.html?raw";
import htmlFile from "../dist/index.html?raw";

const isProd = import.meta.env.PROD;
const template = isProd ? htmlFile : htmlFileDev;

const app = new Hono();

app.get("/", async (c) => {
  return c.html(
    renderer(template, {
      head: "<title>Hello</title>",
      content: render().html,
    }),
  );
});

export default app;
