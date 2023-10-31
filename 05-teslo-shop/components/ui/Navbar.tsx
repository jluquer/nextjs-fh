import { useContext, useState } from 'react';
import NextLink from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import {
  AppBar,
  Badge,
  Box,
  Button,
  IconButton,
  Input,
  InputAdornment,
  Link,
  Toolbar,
  Typography,
} from '@mui/material';
import { ClearOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';

import { UIContext } from '@/context';

const categories = [
  { name: 'Hombres', url: '/category/men' },
  { name: 'Mujeres', url: '/category/women' },
  { name: 'Niños', url: '/category/kid' },
];
export function Navbar() {
  const path = usePathname();
  const { toggleSideMenu } = useContext(UIContext);
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const onSearchTerm = () => {
    if (!searchTerm.trim().length) return;
    router.push(`/search/${searchTerm}`);
  };

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

        <Box
          className="fadeIn"
          sx={{ display: isSearchVisible ? 'none' : { xs: 'none', sm: 'block' } }}
        >
          {categories.map((category) => (
            <NextLink key={category.url} href={category.url} passHref legacyBehavior={true}>
              <Link>
                <Button color={path === category.url ? 'primary' : 'info'}>{category.name}</Button>
              </Link>
            </NextLink>
          ))}
        </Box>

        <Box flex={1}></Box>

        {/* Desktop */}
        {isSearchVisible ? (
          <Input
            sx={{ display: { xs: 'none', sm: 'flex' } }}
            autoFocus
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && onSearchTerm()}
            type="text"
            placeholder="Buscar..."
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={() => setIsSearchVisible(false)}>
                  <ClearOutlined />
                </IconButton>
              </InputAdornment>
            }
          />
        ) : (
          <IconButton
            sx={{ display: { xs: 'none', sm: 'flex' } }}
            onClick={() => setIsSearchVisible(true)}
            className="fadeIn"
          >
            <SearchOutlined />
          </IconButton>
        )}

        {/* Pantallas pequeñas */}
        <IconButton sx={{ display: { xs: 'flex', sm: 'none' } }} onClick={toggleSideMenu}>
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

        <Button onClick={toggleSideMenu}>Menu</Button>
      </Toolbar>
    </AppBar>
  );
}
