import ProductIcon from '@mui/icons-material/Collections';

import  {ProductList} from './product-list';
import ProductEdit from './product-edit';
import { ProductsShow } from './products-show';
import { ProductCreate } from './product-create';

export default {
    list: ProductList,
    create: ProductCreate,
    edit: ProductEdit,
    show: ProductsShow,
    icon: ProductIcon,
};