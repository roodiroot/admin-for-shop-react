import { List, Datagrid, TextField, EditButton, ShowButton } from 'react-admin';
import { PostFilterSidebar } from './filter-sidebar';

export const ProductList = () => (
  <List aside={<PostFilterSidebar />}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <TextField source="img" />
      <>
        <EditButton />
        <ShowButton />
      </>
    </Datagrid>
  </List>
);
