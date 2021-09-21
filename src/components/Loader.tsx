import { Skeleton } from '@mui/material';
import * as React from 'react';

export const Loader = () => (
  <>
    {[...Array(10).keys()].map((key) => (
      <Skeleton key={key} />
    ))}
  </>
);
