import { ArrayField, Datagrid, Show, SimpleShowLayout, TextField } from 'react-admin';

export const ProductsShow = () => {
  return (
    <Show>
      <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="description" />
        <TextField source="img" />
        <TextField source="parameter" label="Размеры" />
        <ArrayField source="size">
          <Datagrid bulkActionButtons={false}>
            <TextField source="sizeMm" />
            <TextField source="price" />
          </Datagrid>
        </ArrayField>
      </SimpleShowLayout>
    </Show>
  );
};
