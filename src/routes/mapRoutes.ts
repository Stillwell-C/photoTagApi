import { Router, Request, Response } from "express";
import mongoose from "mongoose";
import Map from "../models/Map";
import pool from "../config/dbConfig";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  // const mapData = await Map.find().sort("mapName").lean().exec()
  const mapData = await pool.query("SELECT * FROM maps");

  if (!mapData) {
    return res.status(400).json({ message: "No map data found." });
  }

  res.status(200).json(mapData.rows);
});

router.get("/frontPage", async (req: Request, res: Response) => {
  //   const mapData = await Map.find()
  //     .sort("mapName")
  //     .select("-coordinates")
  //     .lean()
  //     .exec();

  const mapData = await pool.query("SELECT map_id, mapname, imgkey FROM maps");

  if (!mapData) {
    return res.status(400).json({ message: "No map data found." });
  }

  res.status(200).json(mapData.rows);
});

router.get("/:mapID", async (req: Request, res: Response) => {
  const mapID = req?.params?.mapID;

  //   const idCheck = mongoose.isValidObjectId(mapID);

  //   if (!idCheck) {
  //     return res.status(404).json({ message: "Invalid map ID." });
  //   }

  if (!mapID) {
    return res.status(400).json({ message: "Must provide map ID" });
  }

  //   const mapData = await Map.findById(mapID).lean().exec();
  const mapData = await pool.query("SELECT * FROM maps WHERE map_id = $1", [
    mapID,
  ]);

  if (!mapID) {
    return res.status(404).json({ message: "Map not found." });
  }

  res.status(200).json(mapData.rows[0]);
});

export default router;
