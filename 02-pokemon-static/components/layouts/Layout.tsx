import Head from "next/head";

import { FC, ReactNode } from "react";
import { Navbar } from "../ui";
import { useTheme } from "@nextui-org/react";

interface Props {
  children: ReactNode;
  title?: string;
}

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title ?? "Pokemon App"}</title>
        <meta name="author" content="Javier Luque" />
        <meta name="description" content={`Información sobre el pokemón ${title}`} />
        <meta name="keywords" content={`{pok}, pokemon, pokedex`} />
      </Head>
      <Navbar />

      <main style={{ padding: "0 20px" }}>{children}</main>
    </>
  );
};
