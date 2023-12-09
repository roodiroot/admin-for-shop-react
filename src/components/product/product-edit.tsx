import * as React from 'react';
import {
  Datagrid,
  DateField,
  Edit,
  EditButton,
  Pagination,
  ReferenceManyField,
  ReferenceManyCount,
  required,
  TabbedForm,
  TextField,
  TextInput,
  useRecordContext,
  NumberInput,
} from 'react-admin';
import { ProductEditDetails } from './product-edit-detais';
import { RichTextInput } from 'ra-input-rich-text';

const ProductEdit = () => (
  <Edit title="Заголовок">
    <TabbedForm>
      <TabbedForm.Tab label="Информация" sx={{ maxWidth: '40em' }}>
        <TextInput source="image" fullWidth />
        <TextInput source="thumbnail" fullWidth />
      </TabbedForm.Tab>
      <TabbedForm.Tab label="Принадлежности" path="details" sx={{ maxWidth: '40em' }}>
        <ProductEditDetails />
      </TabbedForm.Tab>
      <TabbedForm.Tab label="Описание" path="description" sx={{ maxWidth: '40em' }}>
        <RichTextInput source="description" label="" />
      </TabbedForm.Tab>
    </TabbedForm>
  </Edit>
);

export default ProductEdit;
