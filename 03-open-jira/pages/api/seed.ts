import { db } from "@/database";
import { seedData } from "@/database/seed-data";
import { Entry } from "@/models";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

export default async function seed(req: NextApiRequest, res: NextApiResponse<Data>) {
  await db.connect();

  if (process.env.NODE_ENV === "production")
    return res.status(401).json({ message: "Can't seed in production" });

  await Entry.deleteMany();
  await Entry.insertMany(seedData.entries);

  await db.disconnect();

  res.status(200).json({ message: "Seeded data" });
}
