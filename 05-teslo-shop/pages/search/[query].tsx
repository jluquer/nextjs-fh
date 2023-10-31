import { GetServerSideProps } from 'next';

import { Box, Typography } from '@mui/material';

import { ShopLayout } from '@/components/layouts';
import { ProductList } from '@/components/products';
import { dbProduct } from '@/database';
import { IProduct } from '@/interfaces';

interface Props {
  products: IProduct[];
  foundProducts: boolean;
  query: string;
}

export default function SearchPage({ products, foundProducts, query }: Props) {
  return (
    <ShopLayout
      title="Teslo-Shop - Buscador"
      pageDescription="Encuentra los mejores productos de Teslo aquí"
    >
      <Typography variant="h1" component={'h1'}>
        Buscar producto
      </Typography>

      {foundProducts ? (
        <Typography variant="h2" sx={{ mb: 1 }} textTransform="capitalize">
          Término: {query}
        </Typography>
      ) : (
        <Box display={'flex'} gap={1}>
          <Typography variant="h2" sx={{ mb: 1 }}>
            No encontramos ningún producto
          </Typography>
          <Typography variant="h2" sx={{ mb: 1 }} color={'secondary'} textTransform="capitalize">
            {query}
          </Typography>
        </Box>
      )}

      <ProductList products={products} />
    </ShopLayout>
  );
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { query = '' } = params as { query: string };

  if (!query.length)
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };

  let products = await dbProduct.getProductsByTerm(query);
  const foundProducts = products?.length > 0;
  if (!foundProducts) {
    products = await dbProduct.getAllProducts();
  }

  return {
    props: {
      products,
      foundProducts,
      query,
    },
  };
};
