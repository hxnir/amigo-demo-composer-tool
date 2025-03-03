import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';
import { listAnatomy as parts } from '@chakra-ui/anatomy';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
  item: {
    '&::marker': {
      color: 'title',
    },
  },
});

export const listTheme = defineMultiStyleConfig({ baseStyle });
