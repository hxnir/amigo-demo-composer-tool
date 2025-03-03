import { modalAnatomy as parts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const inlineVariant = definePartsStyle({
  dialogContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    outline: 'none',
    zIndex: 0,
  },
  overlay: {
    position: 'absolute',
  },
});

const inlineNonAbsoluteVariant = definePartsStyle({
  dialogContainer: {
    position: 'initial',
    width: '100%',
    height: '100%',
    outline: 'none',
    zIndex: 0,
    paddingBottom: '2rem',
    paddingTop: '2rem',
  },
  overlay: {
    position: 'initial',
  },
});

export const modalTheme = defineMultiStyleConfig({
  sizes: {
    xl: {
      dialog: {
        maxWidth: '70vw',
      },
    },
    lg: {
      dialog: {
        maxWidth: '50vw',
      },
    },
    md: {
      dialog: {
        maxWidth: '40vw',
        minWidth: '16.25rem',
      },
    },
  },
  variants: {
    inline: inlineVariant,
    inlineNonAbsoluteVariant,
  },
});
