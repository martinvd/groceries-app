import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { Alert, Button } from '@mui/material';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/dist/client/router';
import * as React from 'react';
import { GroceryCard } from '../components/GroceryCard';
import { Loader } from '../components/Loader';
import { PageLayout } from '../components/PageLayout';
import { useGrocery } from '../lib/api';

interface DetailsProps {
  groceryName: string;
}

const Index = ({ groceryName }: DetailsProps) => {
  const router = useRouter();
  const { grocery, error, isLoading } = useGrocery(groceryName);

  return (
    <PageLayout>
      {error && (
        <Alert sx={{ mb: 1 }} severity="error">
          {`Error loading grocery with name "${groceryName}"`}.
        </Alert>
      )}
      {grocery && <GroceryCard item={grocery} />}
      {isLoading && <Loader />}
      <Button type="button" onClick={() => router.back()}>
        <ArrowBackRoundedIcon /> Back
      </Button>
    </PageLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      groceryName: context.query.name || '',
    },
  };
};

export default Index;
