import { Hono } from "hono";
import { renderer } from "./renderer";
import { Home } from "./pages/home";

const app = new Hono();

app.get("*", renderer);

app.get("/", (c) => {
  return c.render(<Home />);
});
app.get("/:name", (c) => {
  const id = c.req.param("name");
  return c.render(<h1>{id}!</h1>);
});

export default app;
