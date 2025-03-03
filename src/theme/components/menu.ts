import { menuAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import { baseStyle as textBaseStyle } from '../text';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys);

// define the base component styles
const baseStyle = definePartsStyle({
  // define the part you're going to style
  button: {
    // this will style the MenuButton component
  },
  list: {
    // this will style the MenuList component
    borderRadius: 'base',
    padding: '1',
  },
  item: {
    // this will style the MenuItem and MenuItemOption components
    borderRadius: 'base',
    ...textBaseStyle,
    _hover: {
      backgroundColor: 'gray.100',
    },
  },
  groupTitle: {
    // this will style the text defined by the title prop
    // in the MenuGroup and MenuOptionGroup components
  },
  command: {
    // this will style the text defined by the command
    // prop in the MenuItem and MenuItemOption components
  },
  divider: {
    // this will style the MenuDivider component
  },
});
// export the base styles in the component theme
export const menuTheme = defineMultiStyleConfig({ baseStyle });
