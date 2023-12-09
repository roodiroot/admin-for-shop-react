import { Show, SimpleShowLayout, TextField } from 'react-admin';

export const ModelShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" aria-multiline />
      <TextField source="img" />
    </SimpleShowLayout>
  </Show>
);
