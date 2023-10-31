import { Product } from '@/models';
import { db } from '.';
import { IProduct } from '@/interfaces';

export async function getProductBySlug(slug: string) {
  await db.connect();
  const product = await Product.findOne({ slug }).lean();
  await db.disconnect();

  if (!product) return null;
  return JSON.parse(JSON.stringify(product));
}

interface ProductSlug {
  slug: string;
}

export async function getAllProductsSlug() {
  await db.connect();
  const slugs: ProductSlug[] = await Product.find().select('slug -_id').lean();
  await db.disconnect();

  return slugs.map((productSlug) => productSlug.slug);
}

export async function getProductsByTerm(term: string): Promise<IProduct[]> {
  await db.connect();
  const products = await Product.find({ $text: { $search: term.toString().toLowerCase() } })
    .select('title images price inStock slug -_id')
    .lean();
  await db.disconnect();

  return JSON.parse(JSON.stringify(products));
}

export async function getAllProducts(): Promise<IProduct[]> {
  await db.connect();
  const products = await Product.find().lean();
  await db.disconnect();

  return JSON.parse(JSON.stringify(products));
}
