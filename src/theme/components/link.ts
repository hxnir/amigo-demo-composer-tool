import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system';

const baseStyle = defineStyle({
  _hover: {
    color: 'link',
  },
});

const primaryVariant = defineStyle({
  color: 'link',
  _hover: {
    color: 'primary.600',
  },
  textDecoration: 'underline',
});

const variants = {
  muted: defineStyle({
    _hover: {
      color: 'inherit',
    },
  }),
  primary: primaryVariant,
};

export const linkTheme = defineStyleConfig({
  baseStyle,
  variants,
});
