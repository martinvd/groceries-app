import { Container } from '@mui/material';
import * as React from 'react';
import { PageHeader } from './PageHeader';

export interface PageLayoutProps {
  children?: React.ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => (
  <Container maxWidth="sm">
    <PageHeader>Groceries</PageHeader>
    {children}
  </Container>
);
