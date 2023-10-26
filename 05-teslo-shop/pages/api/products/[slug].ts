import { db } from '@/database';
import { IProduct } from '@/interfaces';
import { Product } from '@/models';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = { message: string } | IProduct;

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'GET') return res.status(400).json({ message: 'Bad request' });

  getProductBySlug(req, res);
}

async function getProductBySlug(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { slug } = req.query;
  if (!slug) return res.status(400).json({ message: 'No slug provided' });

  await db.connect();

  const product = await Product.findOne({ slug }).lean();

  await db.disconnect();

  if (!product) return res.status(404).json({ message: `Product with slug '${slug}' not found` });

  res.status(200).json(product);
}
