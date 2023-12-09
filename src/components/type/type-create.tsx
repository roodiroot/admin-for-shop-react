import * as React from 'react';
import {
  Create,
  SimpleForm,
  TextInput,
  DateInput,
  required,
  FileInput,
  FileField,
} from 'react-admin';

export const TypeCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" validate={[required()]} />
      <TextInput source="description" multiline={true} label="Short description" />
      <FileInput source="img">
        <FileField source="src" title="title" />
      </FileInput>
    </SimpleForm>
  </Create>
);
