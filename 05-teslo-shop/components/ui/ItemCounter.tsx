import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';

interface Props {
  value: number;
  onUpdatedQty: (quantity: number) => void;
  maxValue: number;
}

export function ItemCounter({ value, onUpdatedQty: onUpdateQty, maxValue }: Props) {
  const add = () => {
    if (value >= maxValue) return;
    onUpdateQty(value + 1);
  };

  const remove = () => {
    if (value <= 1) return;
    onUpdateQty(value - 1);
  };

  return (
    <Box display={'flex'} alignItems={'center'}>
      <IconButton onClick={remove} disabled={value === 1}>
        <RemoveCircleOutline />
      </IconButton>
      <Typography sx={{ width: 40, textAlign: 'center' }}>{value}</Typography>
      <IconButton onClick={add} disabled={value === maxValue}>
        <AddCircleOutline />
      </IconButton>
    </Box>
  );
}
