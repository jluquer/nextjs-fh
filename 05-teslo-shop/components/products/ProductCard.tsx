import { useMemo, useState } from 'react';
import NextLink from 'next/link';
import { Box, Card, CardActionArea, CardMedia, Grid, Link, Typography } from '@mui/material';

import { IProduct } from '@/interfaces';

interface Props {
  product: IProduct;
}

export function ProductCard({ product }: Props) {
  const [isHovered, setIsHovered] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const productImage = useMemo(
    () => `/products/${product.images[isHovered ? 1 : 0]}`,
    [isHovered, product.images]
  );

  return (
    <Grid
      item
      xs={6}
      sm={4}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card>
        <NextLink href={`/product/slug`} passHref prefetch={false} legacyBehavior>
          <Link>
            <CardActionArea>
              <CardMedia
                component={'img'}
                className="fadeIn"
                image={productImage}
                alt={product.title}
                onLoad={() => setIsImageLoaded(true)}
              />
            </CardActionArea>
          </Link>
        </NextLink>
      </Card>

      <Box sx={{ mt: 1, display: isImageLoaded ? 'block' : 'none' }} className="fadeIn">
        <Typography fontWeight={700}>{product.title}</Typography>
        <Typography fontWeight={500}>${product.price}</Typography>
      </Box>
    </Grid>
  );
}
