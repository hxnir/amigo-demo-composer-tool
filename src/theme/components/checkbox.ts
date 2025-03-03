import { checkboxAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(checkboxAnatomy.keys);

const baseStyle = definePartsStyle({
  control: {
    border: '0.0625rem solid',
    borderRadius: 'xs',
    _disabled: {
      borderColor: 'gray.300',
      opacity: '50%',
      _hover: {
        borderColor: 'gray.300',
      },
      _checked: {
        border: '0.0625rem solid',
        borderRadius: 'xs',
        borderColor: 'gray.400',
        backgroundColor: 'gray.400',
        color: 'white',
        _hover: {
          border: 'none',
        },
      },
    },
    _hover: {
      borderColor: 'purple.500',
      backgroundColor: 'purple.50',
    },
  },
  label: {
    _disabled: {
      opacity: '100%',
    },
  },
});

export const checkboxTheme = defineMultiStyleConfig({ baseStyle });
