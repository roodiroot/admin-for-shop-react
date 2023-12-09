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

const ListActions = () => (
  <TopToolbar>
    <ExportButton />
    <CreateButton resource="model" label="Create category" />
  </TopToolbar>
);

const ModelList = () => {
  return (
    <List
      sort={{ field: 'name', order: 'ASC' }}
      perPage={20}
      pagination={false}
      component="div"
      actions={false}>
      <ListActions />
      <ModelGrid />
    </List>
  );
};

const ModelGrid = () => {
  const { data, isLoading } = useListContext();

  if (isLoading) {
    return null;
  }
  return (
    <Grid container spacing={2} sx={{ mt: 0 }}>
      {data.map((record) => (
        <RecordContextProvider key={record.id} value={record}>
          <Grid key={record.id} xs={12} sm={6} md={4} lg={3} xl={2} item>
            <Card>
              {record?.img && (
                <CardMedia
                  image={process.env.REACT_APP_IMG + '/' + record.img}
                  sx={{ height: 140 }}
                />
              )}
              <CardContent sx={{ paddingBottom: '0.5em' }}>
                <Typography variant="h5" component="h2" align="center">
                  {/* {inflection.humanize(record.name)} */}
                  {record.name}
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  '.MuiCardActions-spacing': {
                    display: 'flex',
                    justifyContent: 'space-around',
                  },
                }}>
                <LinkToRelatedProducts />
                <EditButton />
              </CardActions>
            </Card>
          </Grid>
        </RecordContextProvider>
      ))}
    </Grid>
  );
};

export default ModelList;
