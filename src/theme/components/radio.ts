import { radioAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(radioAnatomy.keys);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  control: {
    borderColor: 'gray.300',
    _checked: {
      borderColor: 'brand.500',
      background: 'brand.500',
      _hover: {
        borderColor: 'brand.700',
        background: 'brand.700',
      },
    },
    _disabled: {
      _hover: {
        border: 'none',
        cursor: 'default',
      },
    },
    _hover: {
      borderColor: 'brand.500',
    },
  },
});

export const radioTheme = defineMultiStyleConfig({ baseStyle });
