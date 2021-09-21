import * as React from 'react';
import { H1, H1Props } from './H1';
import { Box } from '@mui/system';

export type PageHeaderProps = H1Props;

export const PageHeader = (props: PageHeaderProps) => (
  <Box sx={{ my: 4 }}>
    <H1 {...props} />
  </Box>
);
