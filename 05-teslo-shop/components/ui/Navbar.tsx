import NextLink from "next/link";
import { AppBar, Badge, Box, Button, IconButton, Link, Toolbar, Typography } from "@mui/material";
import { SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";

export function Navbar() {
  return (
    <AppBar>
      <Toolbar>
        <NextLink href={"/"} passHref legacyBehavior={true}>
          <Link display={"flex"} alignItems={"center"}>
            <Typography variant="h6">Teslo |</Typography>
            <Typography sx={{ ml: 0.5 }}>Shop</Typography>
          </Link>
        </NextLink>

        <Box flex={1}></Box>

        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <NextLink href={"/category/men"} passHref legacyBehavior={true}>
            <Link>
              <Button>Hombres</Button>
            </Link>
          </NextLink>
          <NextLink href={"/category/women"} passHref legacyBehavior={true}>
            <Link>
              <Button>Mujeres</Button>
            </Link>
          </NextLink>
          <NextLink href={"/category/kid"} passHref legacyBehavior={true}>
            <Link>
              <Button>Niños</Button>
            </Link>
          </NextLink>
        </Box>

        <Box flex={1}></Box>

        <IconButton>
          <SearchOutlined />
        </IconButton>
        <NextLink href={"/cart"} passHref legacyBehavior={true}>
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
