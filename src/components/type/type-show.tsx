import { Show, SimpleShowLayout, TextField } from 'react-admin';

export const TypeShow = () => {
  return (
    <Show>
      <SimpleShowLayout>
        <TextField source="name" />
        <TextField source="description" />
        <TextField source="img" />
      </SimpleShowLayout>
    </Show>
  );
};
