import { Box, CircularProgress, Typography } from '@mui/material';

import { ShopLayout } from '@/components/layouts';

export default function FullScreenLoading() {
  return (
    <ShopLayout title="Página no encontrada" pageDescription="No hay nada que mostrar aquí">
      <Box
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        flexDirection={'column'}
        height={'calc(100vh - 500px)'}
      >
        <Typography sx={{ mb: 3 }} variant="h2" fontSize={20} fontWeight={200}>
          Cargando...
        </Typography>
        <CircularProgress thickness={2} />
      </Box>
    </ShopLayout>
  );
}
