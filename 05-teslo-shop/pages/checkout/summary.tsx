import NextLink from 'next/link';
import { Box, Button, Card, CardContent, Divider, Grid, Link, Typography } from '@mui/material';

import { ShopLayout } from '@/components/layouts';
import { CartList, OrderSummary } from '@/components/cart';

export default function SummaryPage() {
  return (
    <ShopLayout title="Resumen de Orden" pageDescription="Resumen de la orden">
      <Typography variant="h1" component={'h1'}>
        Resumen de la orden
      </Typography>
      <Grid container>
        <Grid item xs={12} sm={7}>
          <CartList editable={true} />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card className="summary-card">
            <CardContent>
              <Typography variant="h2">Resumen (3 productos)</Typography>

              <Divider sx={{ my: 1 }} />

              <Box display={'flex'} justifyContent={'space-between'} flexWrap={'wrap'}>
                <Typography variant="subtitle1">Dirección de entrega</Typography>
                <NextLink href={'/checkout/address'} passHref legacyBehavior>
                  <Link underline="always">Editar</Link>
                </NextLink>
              </Box>

              <Typography>Fernando Herrera</Typography>
              <Typography>32</Typography>
              <Typography>Stittsville, HYA 23S</Typography>
              <Typography>Canadá</Typography>
              <Typography>+1 23232131</Typography>

              <Divider sx={{ my: 1 }} />
              
              <Box display={'flex'} justifyContent={'end'}>
                <NextLink href={'/checkout/address'} passHref legacyBehavior>
                  <Link underline="always">Editar</Link>
                </NextLink>
              </Box>
              <OrderSummary />

              <Box sx={{ mt: 3 }}>
                <Button color="secondary" className="circular-btn" fullWidth>
                  Confirmar compra
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  );
}
