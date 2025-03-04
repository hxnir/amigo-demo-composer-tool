import { switchAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(switchAnatomy.keys);

const baseStyle = definePartsStyle({
  track: {
    bg: 'gray.200',
    _checked: {
      bg: 'green.500',
    },
  },
  thumb: {
    bg: 'white',
    boxShadow: 'sm',
  },
});

export const switchTheme = defineMultiStyleConfig({ baseStyle });
