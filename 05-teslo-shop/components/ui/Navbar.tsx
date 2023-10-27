import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

import { AppBar, Badge, Box, Button, IconButton, Link, Toolbar, Typography } from '@mui/material';
import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';

const categories = [
  { name: 'Hombres', url: '/category/men' },
  { name: 'Mujeres', url: '/category/women' },
  { name: 'Niños', url: '/category/kid' },
];
export function Navbar() {
  const path = usePathname();

  return (
    <AppBar>
      <Toolbar>
        <NextLink href={'/'} passHref legacyBehavior={true}>
          <Link display={'flex'} alignItems={'center'}>
            <Typography variant="h6">Teslo |</Typography>
            <Typography sx={{ ml: 0.5 }}>Shop</Typography>
          </Link>
        </NextLink>

        <Box flex={1}></Box>

        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {categories.map((category) => (
            <NextLink key={category.url} href={category.url} passHref legacyBehavior={true}>
              <Link>
                <Button color={path === category.url ? 'primary' : 'info'}>{category.name}</Button>
              </Link>
            </NextLink>
          ))}
        </Box>

        <Box flex={1}></Box>

        <IconButton>
          <SearchOutlined />
        </IconButton>
        <NextLink href={'/cart'} passHref legacyBehavior={true}>
          <Link>
            <IconButton>
              <Badge badgeContent={2} color="secondary">
                <ShoppingCartOutlined />
              </Badge>
            </IconButton>
          </Link>
        </NextLink>

        <Button>Menu</Button>
      </Toolbar>
    </AppBar>
  );
}
