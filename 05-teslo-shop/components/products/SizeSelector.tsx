import { Box, Button } from '@mui/material';
import { ISize } from '@/interfaces';

interface Props {
  sizes: ISize[];
  selectedSize?: ISize;
  onSelectedSize: (size: ISize) => void
}

export function SizeSelector({ selectedSize, sizes, onSelectedSize: onSelectSize }: Props) {
  return (
    <Box>
      {sizes.map((size) => (
        <Button
          key={size}
          size="small"
          color={selectedSize === size ? 'primary' : 'info'}
          onClick={() => onSelectSize(size)}
        >
          {size}
        </Button>
      ))}
    </Box>
  );
}
