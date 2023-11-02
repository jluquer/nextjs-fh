import { useContext } from 'react';
import NextLink from 'next/link';

import { Box, Button, CardActionArea, CardMedia, Grid, Link, Typography } from '@mui/material';

import { ItemCounter } from '../ui';
import { CartContext } from '@/context';
import { ICartProduct } from '@/interfaces';

interface Props {
  editable?: boolean;
}

export function CartList({ editable = false }: Props) {
  const { cart } = useContext(CartContext);
  const updateQty = (product: ICartProduct, qty: number) => {
    console.log({ product, qty });
  };
  return (
    <>
      {cart.map((product) => (
        <Grid key={product.slug} container spacing={2} sx={{ mb: 1 }}>
          <Grid item xs={3}>
            <NextLink href={`/product/${product.slug}`} passHref legacyBehavior>
              <Link>
                <CardActionArea>
                  <CardMedia
                    image={`/products/${product.image}`}
                    component={'img'}
                    sx={{ borderRadius: '5px' }}
                  />
                </CardActionArea>
              </Link>
            </NextLink>
          </Grid>
          <Grid item xs={7}>
            <Box display={'flex'} flexDirection={'column'}>
              <Typography variant="body1">{product.title}</Typography>
              <Typography variant="body1">
                Talla <strong>{product.size}</strong>
              </Typography>
              {editable ? (
                <ItemCounter
                  value={product.quantity}
                  maxValue={5}
                  onUpdatedQty={(qty) => updateQty(product, qty)}
                />
              ) : (
                <Typography variant="h5">3 items</Typography>
              )}
            </Box>
          </Grid>
          <Grid item xs={2} display={'flex'} alignItems={'center'} flexDirection={'column'}>
            <Typography variant="subtitle1">${product.price}</Typography>

            {editable && (
              <Button color="secondary" variant="text">
                Quitar
              </Button>
            )}
          </Grid>
        </Grid>
      ))}
    </>
  );
}
