import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';
import { cardAnatomy as parts } from '@chakra-ui/anatomy';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
  container: {
    borderRadius: 'md',

    borderWidth: 'sm',
    borderColor: 'border',
    boxShadow: 'unset',

    color: 'unset',
    overflow: 'hidden',
    bg: 'white',
  },
});

const ghostStyle = definePartsStyle({
  container: {
    bg: 'transparent',
    borderColor: 'transparent',
    borderWidth: '0',
    boxShadow: 'none',
    overflow: 'hidden',
  },
});

const variants = { ghost: ghostStyle };
export const cardTheme = defineMultiStyleConfig({ baseStyle, variants });
