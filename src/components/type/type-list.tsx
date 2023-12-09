import {
  List,
  EditButton,
  useListContext,
  RecordContextProvider,
  CreateButton,
  TopToolbar,
  ExportButton,
} from 'react-admin';
import { Grid, Card, CardMedia, CardContent, CardActions, Typography } from '@mui/material';
// import inflection from 'inflection';
import LinkToRelatedProducts from './link-to-related-products';
import MediaCard from './type-card';

const ListActions = () => (
  <TopToolbar>
    <ExportButton />
    <CreateButton resource="type" label="Create type" />
  </TopToolbar>
);

const TypeList = () => {
  return (
    <List
      sort={{ field: 'name', order: 'ASC' }}
      perPage={20}
      pagination={false}
      component="div"
      actions={false}>
      <ListActions />
      <TypeGrid />
    </List>
  );
};

const TypeGrid = () => {
  const { data, isLoading } = useListContext();

  if (isLoading) {
    return null;
  }
  return (
    <Grid container spacing={2} sx={{ mt: 0 }}>
      {data.map((record) => (
        <RecordContextProvider key={record.id} value={record}>
          <MediaCard {...record} />
        </RecordContextProvider>
      ))}
    </Grid>
  );
};

export default TypeList;
