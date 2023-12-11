import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';

import {
  useTranslate,
  DashboardMenuItem,
  MenuItemLink,
  MenuProps,
  useSidebarState,
} from 'react-admin';

import types from '../components/type';
import category from '../components/category';
import model from '../components/model';
import products from '../components/product';
import SubMenu from './sub-menu';

type MenuName = 'menuCatalog' | 'menuSales' | 'menuCustomers';

const Menu = ({ dense = false }: MenuProps) => {
  const [state, setState] = useState({
    menuCatalog: true,
    menuSales: true,
    menuCustomers: true,
  });
  const translate = useTranslate();
  const [open] = useSidebarState();

  const handleToggle = (menu: MenuName) => {
    setState((state) => ({ ...state, [menu]: !state[menu] }));
  };

  return (
    <Box
      sx={{
        width: open ? 200 : 50,
        marginTop: 1,
        marginBottom: 1,
        transition: (theme) =>
          theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
      }}>
      <DashboardMenuItem />
      <SubMenu
        handleToggle={() => handleToggle('menuSales')}
        isOpen={state.menuSales}
        name="Товары"
        icon={<types.icon />}
        dense={dense}>
        <MenuItemLink
          to="/type"
          state={{ _scrollToTop: true }}
          primaryText="Типы"
          leftIcon={<types.icon />}
          dense={dense}
        />
        <MenuItemLink
          to="/category"
          state={{ _scrollToTop: true }}
          primaryText="Категории"
          leftIcon={<category.icon />}
          dense={dense}
        />
        <MenuItemLink
          to="/model"
          state={{ _scrollToTop: true }}
          primaryText="Модели"
          leftIcon={<model.icon />}
          dense={dense}
        />
        <MenuItemLink
          to="/products"
          state={{ _scrollToTop: true }}
          primaryText="Товары"
          leftIcon={<products.icon />}
          dense={dense}
        />
      </SubMenu>
    </Box>
  );
};

export default Menu;
