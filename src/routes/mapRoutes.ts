import { Router, Request, Response } from "express";
import pool from "../config/dbConfig";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  const mapData = await pool.query("SELECT * FROM maps");

  if (!mapData) {
    return res.status(400).json({ message: "No map data found." });
  }

  res.status(200).json(mapData.rows);
});

router.get("/frontPage", async (req: Request, res: Response) => {
  const mapData = await pool.query("SELECT map_id, mapname, imgkey FROM maps");

  if (!mapData) {
    return res.status(400).json({ message: "No map data found." });
  }

  res.status(200).json(mapData.rows);
});

router.get("/:mapID", async (req: Request, res: Response) => {
  const mapID = req?.params?.mapID;

  if (!mapID) {
    return res.status(400).json({ message: "Must provide map ID" });
  }

  const mapData = await pool.query("SELECT * FROM maps WHERE map_id = $1", [
    mapID,
  ]);

  if (!mapID) {
    return res.status(404).json({ message: "Map not found." });
  }

  res.status(200).json(mapData.rows[0]);
});

export default router;
