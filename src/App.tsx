import React from 'react';
import { Admin, Resource, combineDataProviders } from 'react-admin';
import dataTypeProviders from './providers/dataTypeProviders';
import dataProductProviders from './providers/dataProductProviders';
import types from './components/type';
import categoryes from './components/category';
import models from './components/model';
import products from './components/product';
import { authProvider } from './providers/authProviders';

const dataProvider = combineDataProviders((resource) => {
  switch (resource) {
    case 'type':
      return dataTypeProviders;
    case 'model':
      return dataTypeProviders;
    case 'category':
      return dataTypeProviders;
    case 'size':
      return dataTypeProviders;
    case 'product':
      return dataProductProviders;
    default:
      throw new Error(`Unknown resource: ${resource}`);
  }
});

function App() {
  return (
    <Admin authProvider={authProvider} dataProvider={dataProvider}>
      <Resource name="type" {...types} options={{ subMenu: 'albumList' }} />
      <Resource name="category" {...categoryes} />
      <Resource name="model" {...models} />
      <Resource name="product" {...products} />
    </Admin>
  );
}

export default App;
