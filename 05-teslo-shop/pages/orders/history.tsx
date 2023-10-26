import NextLink from 'next/link';

import { Chip, Grid, Link, Typography } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams, GridRowsProp } from '@mui/x-data-grid';

import { ShopLayout } from '@/components/layouts';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'fullName', headerName: 'Nombre Completo', width: 300 },
  {
    field: 'paid',
    headerName: 'Pagado',
    description: 'Muestra información sobre si está pagada la orden de compra o no',
    width: 200,
    renderCell: (params: GridRenderCellParams) => {
      return params.row.paid ? (
        <Chip color="success" variant="outlined" label="Pagado" />
      ) : (
        <Chip color="error" variant="outlined" label="No pagado" />
      );
    },
  },
  {
    field: 'viewOrder',
    headerName: 'Ver pedido',
    width: 150,
    sortable: false,
    filterable: false,
    renderCell: (params: GridRenderCellParams) => {
      return (
        <NextLink href={`/orders/${params.row.id}`} passHref legacyBehavior>
          <Link underline='always'>Ver pedido</Link>
        </NextLink>
      );
    },
  },
];

const rows: GridRowsProp = [
  { id: 1, fullName: 'Fernando Herrera', paid: true },
  { id: 2, fullName: 'Melissa Flores', paid: false },
  { id: 3, fullName: 'Hernando Vallejo', paid: true },
  { id: 4, fullName: 'Emin Reyes', paid: false },
  { id: 5, fullName: 'Eduardo Rios', paid: false },
  { id: 6, fullName: 'Natalia Herrera', paid: true },
];

export default function HistoryPage() {
  return (
    <ShopLayout title="Historial de pedidos" pageDescription="Historial de pedidos del cliente">
      <Typography variant="h1" component={'h1'}>
        Historial de pedidos
      </Typography>
      <Grid container>
        <Grid item xs={12} sx={{ height: 650, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { pageSize: 10 },
              },
            }}
            pageSizeOptions={[5, 10, 25]}
          />
        </Grid>
      </Grid>
    </ShopLayout>
  );
}
