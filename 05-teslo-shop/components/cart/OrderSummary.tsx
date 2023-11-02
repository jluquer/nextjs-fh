import { useContext } from 'react';

import { Grid, Typography } from '@mui/material';

import { CartContext } from '@/context';
import { currency } from '@/utils';

export function OrderSummary() {
  const { numberOfItems, subtotal, tax, total } = useContext(CartContext);

  return (
    <Grid container>
      <Grid item xs={6}>
        <Typography>Número de Productos</Typography>
      </Grid>
      <Grid item xs={6} display={'flex'} justifyContent={'end'}>
        <Typography>
          {numberOfItems} producto{numberOfItems > 0 && 's'}
        </Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography>Subtotal</Typography>
      </Grid>
      <Grid item xs={6} display={'flex'} justifyContent={'end'}>
        <Typography>{currency.format(subtotal)}</Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography>Impuestos ({+(process.env.NEXT_PUBLIC_TAX_RATE ?? 0) * 100}%)</Typography>
      </Grid>
      <Grid item xs={6} display={'flex'} justifyContent={'end'}>
        <Typography>{currency.format(tax)}</Typography>
      </Grid>

      <Grid item xs={6} sx={{ mt: 2 }}>
        <Typography variant="subtitle1">Total:</Typography>
      </Grid>
      <Grid item xs={6} display={'flex'} justifyContent={'end'}>
        <Typography variant="subtitle1">{currency.format(total)}</Typography>
      </Grid>
    </Grid>
  );
}
