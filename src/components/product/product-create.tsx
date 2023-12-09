import * as React from 'react';
import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  ArrayInput,
  SimpleFormIterator,
} from 'react-admin';
import { ProductEditDetails } from './product-edit-detais';

export const ProductCreate = () => (
  <Create>
    <SimpleForm>
      <ProductEditDetails />
      <TextInput source="parameter" label="Размеры" />
      <TextInput source="description" multiline={true} label="Short description" />
      <ArrayInput source="size">
        <SimpleFormIterator inline>
          <TextInput source="sizeMm" helperText={false} />
          <NumberInput source="price" helperText={false} />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Create>
);
