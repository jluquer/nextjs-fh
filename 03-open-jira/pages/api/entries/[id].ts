import { db } from "@/database";
import { Entry, IEntry } from "@/models";
import mongoose from "mongoose";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = { message: string } | IEntry;

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { id } = req.query;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ message: "El id no es válido " + id });
  }

  switch (req.method) {
    case "GET":
      return getEntry(id, res);
    case "PUT":
      return updateEntry(req, res);
    case "DELETE":
      return deleteEntry(req, res);
    default:
      res.status(400).json({ message: "el método no existe" });
  }
}

async function updateEntry(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { id } = req.query;
  await db.connect();
  const entryToUpdate = await Entry.findById(id);

  if (!entryToUpdate) {
    await db.disconnect();
    return res.status(400).json({ message: `No existe una entrada con el ID: ${id}` });
  }

  const { description = entryToUpdate.description, status = entryToUpdate.status } = req.body;

  try {
    const updatedEntry = await Entry.findByIdAndUpdate(
      id,
      { description, status },
      { runValidators: true, new: true }
    );
    await db.disconnect();
    res.status(200).json(updatedEntry!);
  } catch (error: any) {
    await db.disconnect();
    return res.status(400).json({ message: `bad request: ${error.errors.status.message}` });
  }
}
function deleteEntry(req: NextApiRequest, res: NextApiResponse<Data>) {
  throw new Error("Function not implemented.");
}
async function getEntry(id: string | string[] | undefined, res: NextApiResponse<Data>) {
  try {
    await db.connect();
    const entry = await Entry.findById(id);
    await db.disconnect();

    if (!entry)
      return res.status(404).json({ message: `No se encontro la entrada con el id ${id}` });

    res.status(200).json(entry);
  } catch (error: any) {
    await db.disconnect();
    return res.status(400).json({ message: `bad request: ${error.errors.status.message}` });
  }
}
