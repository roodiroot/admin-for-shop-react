import * as React from 'react';
import { Edit, SimpleForm, TextInput, required, FileInput, FileField } from 'react-admin';

export const CategoryEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="name" disabled />
      <TextInput source="description" multiline={true} label="Short description" />
      <FileInput source="img" accept=".jpg,.png,.jpeg">
        <FileField source="src" title="title" />
      </FileInput>
    </SimpleForm>
  </Edit>
);
