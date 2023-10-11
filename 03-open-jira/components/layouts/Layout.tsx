import { FC, ReactNode } from "react";
import { Box } from "@mui/material";
import Head from "next/head";
import { Navbar } from "../ui";

interface Props {
  title?: string;
  children: ReactNode;
}

export const Layout: FC<Props> = ({ children, title = "Open Jira" }) => {
  return (
    <Box sx={{ flexFlow: 1 }}>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      {/* sidebar */}

      <Box sx={{ padding: "10px 20px" }}>{children}</Box>
    </Box>
  );
};
