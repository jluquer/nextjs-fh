import { Product } from '@/models';
import { db } from '.';

export async function getProductBySlug(slug: string) {
  await db.connect();
  const product = await Product.findOne({ slug }).lean();
  await db.disconnect();

  if (!product) return null;
  return JSON.parse(JSON.stringify(product));
}
