import { createServer } from "http";
import { dev } from "astro";

let devServer = null;

const rootDir = process.cwd(); // Current working directory (Astro root)

async function startAstro() {
  if (devServer) {
    console.log("here");
    await devServer.stop();
    devServer = null;
  }

  devServer = await dev({ root: rootDir });
  console.log("Astro dev server started.");
}

const server = createServer(async (req, res) => {
  if (req.method === "POST" && req.url === "/restart-astro") {
    await startAstro();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: "Astro dev server restarted" }));
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(4322, async () => {
  console.log("Listening for Strapi webhooks on port 4322");
  await startAstro();
});
