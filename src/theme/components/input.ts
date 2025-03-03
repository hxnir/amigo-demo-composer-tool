import { inputAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import { textTheme } from '../text';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const baseStyle = definePartsStyle({
  field: {
    '&::placeholder': {
      color: 'placeholder',
      ...textTheme.variants.Regular,
      ...textTheme.sizes.TextMD,
    },
    borderRadius: 'base',
    color: 'title',
    ...textTheme.variants.Regular,
    ...textTheme.sizes.TextMD,
    _disabled: {
      backgroundColor: 'neutrals.100',
      color: 'neutrals.500',
      opacity: 1,
    },
  },
  element: {
    height: '100%',
    pointerEvents: 'none',
  },
  group: {
    borderColor: 'gray.200',
  },
});

const sm = definePartsStyle({
  field: {
    fontSize: 'sm',
    '::placeholder': {
      fontSize: 'sm', // Placeholder font size
    },
  },
});

const xs = definePartsStyle({
  field: {
    height: '1.75rem',
    fontSize: 'xs',
    '::placeholder': {
      fontSize: 'xs', // Placeholder font size
    },
  },
});

const outline = definePartsStyle({
  field: {
    borderRadius: 'base',
    borderWidth: 'sm',
    borderColor: 'border',
    _hover: {
      borderColor: 'borderHover',
    },
  },
});

const naked = definePartsStyle({
  field: {},
});
export const inputTheme = defineMultiStyleConfig({
  baseStyle,
  sizes: { sm, xs },
  variants: {
    naked,
    outline,
  },
});
