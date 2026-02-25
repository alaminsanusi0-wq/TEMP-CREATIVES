import express, { Request, Response } from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import Database from "better-sqlite3";
import multer from "multer";
import { v4 as uuidv4 } from "uuid";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

interface MulterRequest extends Request {
  file?: Express.Multer.File;
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const PORT = Number(process.env.PORT) || 3000;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "tempcreatives2026";
const DATA_DIR = process.env.DATA_DIR || path.join(__dirname, "data");
const UPLOADS_DIR = path.join(DATA_DIR, "uploads");

// Ensure directories exist
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
if (!fs.existsSync(UPLOADS_DIR)) fs.mkdirSync(UPLOADS_DIR, { recursive: true });

const db = new Database(path.join(DATA_DIR, "agency.db"));

// Initialize DB
db.exec(`
  CREATE TABLE IF NOT EXISTS projects (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    category TEXT NOT NULL,
    imageUrl TEXT NOT NULL,
    tools TEXT,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOADS_DIR);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${uuidv4()}${ext}`);
  },
});

const upload = multer({ storage });

async function startServer() {
  const app = express();

  app.use(express.json());
  
  // Serve uploaded files
  app.use("/uploads", express.static(UPLOADS_DIR));

  // API Routes
  app.get("/api/projects", (req, res) => {
    const projects = db.prepare("SELECT * FROM projects ORDER BY createdAt DESC").all();
    res.json(projects);
  });

  app.delete("/api/projects/:id", (req, res) => {
    const { id } = req.params;
    const { password } = req.query;

    if (password !== ADMIN_PASSWORD) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const project = db.prepare("SELECT imageUrl FROM projects WHERE id = ?").get(id) as { imageUrl: string } | undefined;
    
    if (project) {
      // Extract filename from /uploads/filename
      const filename = project.imageUrl.split("/").pop();
      if (filename) {
        const filePath = path.join(UPLOADS_DIR, filename);
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
      }
      db.prepare("DELETE FROM projects WHERE id = ?").run(id);
      res.json({ success: true });
    } else {
      res.status(404).json({ error: "Project not found" });
    }
  });

  app.post("/api/projects", upload.single("image"), (req: MulterRequest, res: Response) => {
    const { title, description, category, tools, password } = req.body;
    
    // Simple admin check
    if (password !== ADMIN_PASSWORD) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    if (!req.file) {
      return res.status(400).json({ error: "Image is required" });
    }

    const imageUrl = `/uploads/${req.file.filename}`;
    const id = uuidv4();

    db.prepare("INSERT INTO projects (id, title, description, category, imageUrl, tools) VALUES (?, ?, ?, ?, ?, ?)")
      .run(id, title, description, category, imageUrl, tools);

    res.json({ success: true, id });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist/index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
