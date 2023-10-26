import { db, seedDatabase } from '@/database';
import { Product } from '@/models';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message: string;
};

export default async function seed(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (process.env.NODE_ENV === 'production')
    return res.status(401).json({ message: "Can't seed in production" });

  await db.connect();

  await Product.deleteMany();
  await Product.insertMany(seedDatabase.initialData.products);

  await db.disconnect();

  res.status(200).json({ message: 'Seeded data' });
}
