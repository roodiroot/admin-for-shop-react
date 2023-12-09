import * as React from 'react';
import { Create, SimpleForm, TextInput, required, FileInput, FileField } from 'react-admin';

export const CategoryCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" multiline={true} label="Short description" />
      <FileInput source="img">
        <FileField source="src" title="title" />
      </FileInput>
    </SimpleForm>
  </Create>
);
