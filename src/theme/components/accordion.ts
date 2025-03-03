import { accordionAnatomy as parts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const outline = definePartsStyle(() => ({
  container: {
    border: '0.0625rem solid',
    borderColor: 'border !important',
    borderWidth: 'sm',
    background: 'white',
    borderRadius: 'base',
    overflow: 'hidden',
  },
  button: {
    minHeight: '3rem',
  },
  panel: {
    borderTop: '0.0625rem solid',
    borderColor: 'gray.100 !important',
  },
}));

const variants = {
  cards: outline,
};

export const accordionTheme = defineMultiStyleConfig({
  variants,
});
