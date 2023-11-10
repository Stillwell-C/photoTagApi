import { Router, Request, Response } from "express";
import Map from "../models/Map";
import Leaderboard from "../models/Leaderboard";
import pool from "../config/dbConfig";
import { QueryResult } from "pg";

interface Player {
  playerName: string;
  seconds: number;
  timer: string;
  mapName: string;
}

interface LeaderDataObj {
  mapName: string;
  mapID: string;
  leaderData: Player[] | any;
}

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  // const maps = await Map.find().sort("mapName").select("mapName").lean().exec();

  // const leaderData: LeaderDataObj[] = [];
  // for (const singleMap of maps) {
  //   const mapLeaderData = await Leaderboard.find({ mapID: singleMap._id })
  //     .sort({ seconds: 1, createdAt: 1 })
  //     .limit(5)
  //     .exec();

  //   leaderData.push({
  //     mapName: singleMap.mapName,
  //     mapID: singleMap._id,
  //     leaderData: mapLeaderData,
  //   });
  // }

  const mapData: QueryResult = await pool.query(
    "SELECT maps.mapname, maps.map_id, array_agg(CASE WHEN l.playername IS NULL THEN NULL ELSE jsonb_build_object('leader_id', l.leader_id, 'playername', l.playername, 'timer', l.timer, 'seconds', l.seconds) END) as leaderData FROM maps left join lateral (SELECT map_id, leader_id, playername, timer, seconds FROM leaderboard WHERE maps.map_id = map_id ORDER BY seconds, created_at LIMIT 5) as l ON l.map_id = maps.map_id GROUP BY maps.mapname, maps.map_id"
  );

  res.status(200).json(mapData.rows);
});

router.post("/", async (req: Request, res: Response) => {
  const { playerName, seconds, timer, mapID } = req?.body;

  // if (!playerName || !seconds || !timer || !mapID) {
  //   return res
  //     .status(400)
  //     .json({
  //       message:
  //         "Request must include a playerName, seconds, timer, and mapID.",
  //     });
  // }

  // await Leaderboard.create({ playerName, seconds, timer, mapID });

  const date = new Date();
  const timeStamp = date.toUTCString();

  await pool.query(
    "INSERT INTO leaderboard (playername, seconds, timer, map_id, created_at) VALUES ($1, $2, $3, $4, $5)",
    [playerName, seconds, timer, mapID, timeStamp]
  );

  res.status(201).json({ message: "Entry successfully created." });
});

export default router;
