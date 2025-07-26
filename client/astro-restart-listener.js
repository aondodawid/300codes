import { createServer } from "http";
import { dev } from "astro";

const ASTRO_RESTART_SECRET = "asdsdasyzx";
const rootDir = process.cwd();

let devServer = null;

async function startAstro() {
  console.log("Astro dev server is running.");
  devServer = await dev({ root: rootDir });
}
async function restartAstro() {
  console.log("Restarting Astro dev server...");
  await devServer.stop();
  devServer = await dev({ root: rootDir });
}

const server = createServer(async (req, res) => {
  res.setHeader("X-XSS-Protection", "1; mode=block"); // (niezalecany, ale możliwy)
  res.setHeader("Content-Security-Policy", "default-src 'self'");
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("Referrer-Policy", "no-referrer");

  if (req.method === "POST" && req.url === "/restart-astro") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      try {
        const jsonData = JSON.parse(body);
        console.log("jsonData.secret ", jsonData.secret);
        console.log("process.env.ASTRO_RESTART_SECRET", ASTRO_RESTART_SECRET);
        if (jsonData.secret !== ASTRO_RESTART_SECRET) {
          res.writeHead(403, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ error: "Forbidden" }));
          return;
        }
        console.log("here");
        restartAstro();
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ status: "Astro dev server restarted" }));
      } catch (err) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "invalid JSON" }));
      }
    });
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(4322, async () => {
  console.log("Listening for Strapi webhooks on port 4322");
  await startAstro();
});
