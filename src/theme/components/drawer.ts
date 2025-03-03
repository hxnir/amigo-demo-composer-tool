import { drawerAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  drawerAnatomy.keys,
);

const baseStyle = {
  dialog: {
    background: 'transparent',
    borderLeftRadius: '1rem',
    overflow: 'hidden',
    borderRadius: 'base',
    bgColor: 'gray.50',
  },
  body: {
    overflowY: 'auto',
  },
  footer: {},
};
export const drawerTheme = defineMultiStyleConfig({
  defaultProps: {
    size: 'lg',
  },
  sizes: {
    lg: {
      dialog: {
        maxW: '55vw',
      },
    },
  },
  baseStyle,
  variants: {
    paddingLess: {
      body: {
        p: 0,
      },
    },
  },
});
