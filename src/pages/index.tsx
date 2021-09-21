import { Alert, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/dist/client/router';
import * as React from 'react';
import { GroceryList } from '../components/GroceryList';
import { Loader } from '../components/Loader';
import { PageLayout } from '../components/PageLayout';
import { useGroceries } from '../lib/api';
import { filterGroceriesByName } from '../lib/groceries';
import { Grocery } from '../types';

interface IndexProps {
  urlSearchQuery: string;
}

const Index = ({ urlSearchQuery }: IndexProps) => {
  const router = useRouter();
  const { groceries, error, isLoading } = useGroceries();
  const [searchQuery, setSearchQuery] = React.useState(urlSearchQuery);
  const [filteredGroceries, setFilteredGroceries] = React.useState<Grocery[]>();

  const filterGroceries = React.useCallback(
    (query: string) => {
      setFilteredGroceries(
        query && groceries ? filterGroceriesByName(query, groceries) : groceries
      );
    },
    [groceries]
  );

  React.useEffect(() => {
    if (!filteredGroceries && groceries) {
      filterGroceries(searchQuery);
    }
  }, [filterGroceries, filteredGroceries, groceries, searchQuery]);

  function updateUrlSearchQuery(query: string) {
    router.replace({
      query: query ? { filter: query } : null,
    });
  }

  function onSearchFieldChange(query: string) {
    setSearchQuery(query);
    filterGroceries(query);
    updateUrlSearchQuery(query);
  }

  function onSelectGrocery(name: Grocery['name']) {
    router.push({
      pathname: '/details',
      query: { name },
    });
  }

  return (
    <PageLayout>
      <Box pb={2}>
        <TextField
          label="Search"
          variant="outlined"
          fullWidth
          value={searchQuery}
          onChange={(event) => {
            onSearchFieldChange(event.target.value);
          }}
        />
      </Box>
      {error && (
        <Alert sx={{ mb: 1 }} severity="error">
          Error loading groceries.
        </Alert>
      )}
      {filteredGroceries && (
        <GroceryList
          items={filteredGroceries}
          onSelectGrocery={onSelectGrocery}
        />
      )}
      {isLoading && <Loader />}
    </PageLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      urlSearchQuery: context.query.filter || '',
    },
  };
};

export default Index;
