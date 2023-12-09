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

export const ModelCreate = () => {
  function formatLogo(value: any) {
    if (!value || typeof value === 'string') {
      return { url: value };
    } else {
      return value;
    }
  }
  return (
    <Create>
      <SimpleForm>
        <TextInput source="name" validate={[required()]} />
        <TextInput source="description" multiline={true} label="Short description" />
        <FileInput format={formatLogo} source="img" accept=".jpg,.png,.jpeg">
          <FileField source="src" title="title" />
        </FileInput>
      </SimpleForm>
    </Create>
  );
};
