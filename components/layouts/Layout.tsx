import { Box } from '@mui/system';
import Head from 'next/head';
import React from 'react';
import { Navbar,Sidebar } from '../ui';

interface Props {
  children?: React.ReactElement;
  title?: string;
}
export const Layout: React.FC<Props> = ({ title = ' SAJira', children }) => {
  return (
    <Box sx={{ flexFlow: 1 }}>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar/>
      <Sidebar/>

      <Box
        sx={{
          padding: '10px 20px'
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
