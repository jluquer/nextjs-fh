import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { Typography } from '@mui/material';

import { ShopLayout } from '@/components/layouts';
import { useProducts } from '@/hooks';
import { ProductList } from '@/components/products';
import { FullScreenLoading } from '@/components/ui';

interface Props extends InferGetServerSidePropsType<typeof getServerSideProps> {}

const categories: Record<string, string> = { men: 'Hombre', women: 'Mujeres', kid: 'Niños' };
const categoriesAlt: Record<string, string> = { men: 'ellos', women: 'ellas', kid: 'los pequeños' };

export default function CategoryPage({ category }: Props) {
  const { products, isLoading } = useProducts('/products?gender=' + category);
  const categoryName = categories[category] ?? 'Categoría desconocida';
  const categoryAltName = categoriesAlt[category] ?? 'Categoría desconocida';

  console.log({ category, products });

  return (
    <ShopLayout
      title={`Teslo-Shop - ${categoryName}`}
      pageDescription={`Encuentra los mejores productos de Teslo para ${categoryAltName}`}
    >
      <Typography variant="h1" component={'h1'}>
        {categoryName}
      </Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        Productos para {categoryAltName}
      </Typography>

      {isLoading ? <FullScreenLoading /> : <ProductList products={products} />}
    </ShopLayout>
  );
}

export const getServerSideProps: GetServerSideProps<{
  category: string;
}> = async ({ params }) => {
  const category = params?.category;

  return {
    props: {
      category: category?.toString() ?? '',
    },
  };
};
