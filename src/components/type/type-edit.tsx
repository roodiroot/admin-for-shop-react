import { Edit, FileField, FileInput, SimpleForm, TextInput } from 'react-admin';

export const TypeEdit = () => {
  function formatLogo(value: any) {
    if (!value || typeof value === 'string') {
      return { url: value };
    } else {
      return value;
    }
  }

  return (
    <Edit>
      <SimpleForm>
        <TextInput source="id" disabled />
        <TextInput source="name" />
        <TextInput source="description" />
        <FileInput format={formatLogo} source="img" accept=".jpg,.png,.jpeg">
          <FileField source="src" title="title" />
        </FileInput>
      </SimpleForm>
    </Edit>
  );
};
